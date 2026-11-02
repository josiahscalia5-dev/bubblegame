using System;
using System.IO;
using System.Linq;
using UnityEditor;
using UnityEditor.Build.Reporting;
using UnityEngine;

namespace BubbleWash.EditorTools
{
    /// <summary>
    /// Entry points for building the playable WebGL (browser) version without a local Unity install:
    ///
    /// Unity Build Automation (Unity Cloud dashboard):
    ///     Build target > Advanced settings > Pre-Export Method Name:  BubbleWash.EditorTools.CloudBuild.PreExport
    ///
    /// GitHub Actions + GameCI (.github/workflows/webgl-build.yml):
    ///     buildMethod: BubbleWash.EditorTools.CloudBuild.BuildWebGL
    ///
    /// Command line (any machine with Unity 6.3 + WebGL support):
    ///     Unity -batchmode -quit -projectPath . -buildTarget WebGL -executeMethod BubbleWash.EditorTools.CloudBuild.BuildWebGL
    ///
    /// The Level 1 scene is generated from the Meshy models by <see cref="Level1SceneBuilder"/>, so a
    /// fresh cloud checkout builds it first, then applies browser-friendly WebGL settings.
    /// </summary>
    public static class CloudBuild
    {
        public const string DefaultOutput = "Builds/WebGL/BubbleWashKingdom";

        /// <summary>Unity Build Automation pre-export hook: generate the scene and set WebGL options.</summary>
        public static void PreExport()
        {
            Debug.Log("[BubbleWash] Cloud pre-export: building Level 1 scene and configuring WebGL.");
            PrepareProject(regenerateScene: true);
        }

        /// <summary>
        /// Generate the Level 1 scene, register it for the build and set WebGL player options.
        /// Cloud builds regenerate the scene every time, so a cached workspace (Unity Build Automation
        /// keeps one between builds) can never ship a scene from older code. Local builds keep an
        /// existing scene, so look tuning saved in it survives.
        /// </summary>
        public static void PrepareProject(bool regenerateScene)
        {
            AssetDatabase.Refresh();
            if (AssetDatabase.LoadAssetAtPath<GameObject>(Level1SceneBuilder.CastlePath) == null)
                throw new Exception("[BubbleWash] The castle GLB did not import. Check that com.unity.cloud.gltfast is in Packages/manifest.json.");
            if (regenerateScene || !File.Exists(Level1SceneBuilder.ScenePath)) Level1SceneBuilder.Build();
            else
            {
                // Make sure the scene is the first scene in the build.
                var scenes = EditorBuildSettings.scenes.Where(s => s.path != Level1SceneBuilder.ScenePath).ToList();
                scenes.Insert(0, new EditorBuildSettingsScene(Level1SceneBuilder.ScenePath, true));
                EditorBuildSettings.scenes = scenes.ToArray();
            }
            ConfigureWebGL();
            AssetDatabase.SaveAssets();
        }

        /// <summary>Settings that let the build run from any static web host (itch.io, Netlify, GitHub Pages, Unity Play).</summary>
        public static void ConfigureWebGL()
        {
            PlayerSettings.WebGL.compressionFormat = WebGLCompressionFormat.Gzip;
            PlayerSettings.WebGL.decompressionFallback = true; // works even when the host doesn't send Content-Encoding headers
            PlayerSettings.WebGL.dataCaching = true;
            PlayerSettings.WebGL.exceptionSupport = WebGLExceptionSupport.ExplicitlyThrownExceptionsOnly;
            PlayerSettings.WebGL.template = "PROJECT:BubbleWash";
            PlayerSettings.defaultWebScreenWidth = 540;
            PlayerSettings.defaultWebScreenHeight = 1080;
            PlayerSettings.runInBackground = true;
        }

        /// <summary>Full WebGL build (GameCI buildMethod / command line). Exits with code 1 on failure in batch mode.</summary>
        public static void BuildWebGL()
        {
            try
            {
                PrepareProject(regenerateScene: Application.isBatchMode);
                string output = ArgValue("-customBuildPath") ?? DefaultOutput;
                Directory.CreateDirectory(output);
                var options = new BuildPlayerOptions
                {
                    scenes = new[] { Level1SceneBuilder.ScenePath },
                    locationPathName = output,
                    target = BuildTarget.WebGL,
                    targetGroup = BuildTargetGroup.WebGL,
                    options = BuildOptions.None,
                };
                var report = BuildPipeline.BuildPlayer(options);
                var s = report.summary;
                Debug.Log($"[BubbleWash] WebGL build {s.result}: {s.totalSize / (1024 * 1024)} MB in {s.totalTime} -> {Path.GetFullPath(output)}");
                if (s.result != BuildResult.Succeeded) throw new Exception($"WebGL build {s.result} with {s.totalErrors} error(s).");
                if (Application.isBatchMode) EditorApplication.Exit(0);
            }
            catch (Exception e)
            {
                Debug.LogException(e);
                if (Application.isBatchMode) EditorApplication.Exit(1);
                else throw;
            }
        }

        [MenuItem("Bubble Wash/4. Build WebGL (browser version)", priority = 20)]
        static void BuildFromMenu()
        {
            BuildWebGL();
            EditorUtility.RevealInFinder(Path.GetFullPath(DefaultOutput));
        }

        static string ArgValue(string name)
        {
            var args = Environment.GetCommandLineArgs();
            for (int i = 0; i < args.Length - 1; i++)
                if (string.Equals(args[i], name, StringComparison.OrdinalIgnoreCase)) return args[i + 1];
            return null;
        }
    }
}
