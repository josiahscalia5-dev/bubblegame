using System.IO;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;

namespace BubbleWash.EditorTools
{
    /// <summary>
    /// On the first open of the project, builds the Level 1 scene automatically once the Meshy GLBs
    /// have been imported by glTFast, and opens it. Later opens leave the scene alone; rebuild any time
    /// from Bubble Wash > 1.
    /// </summary>
    [InitializeOnLoad]
    static class FirstOpenSetup
    {
        const string SessionKey = "BubbleWash.FirstOpenChecked";
        static int _waitFrames;

        static FirstOpenSetup()
        {
            if (Application.isBatchMode || SessionState.GetBool(SessionKey, false)) return;
            EditorApplication.update += Poll;
        }

        static void Poll()
        {
            if (EditorApplication.isCompiling || EditorApplication.isUpdating || EditorApplication.isPlayingOrWillChangePlaymode) return;
            if (++_waitFrames < 30) return;
            EditorApplication.update -= Poll;
            SessionState.SetBool(SessionKey, true);

            if (File.Exists(Level1SceneBuilder.ScenePath))
            {
                if (EditorSceneManager.GetActiveScene().path != Level1SceneBuilder.ScenePath && string.IsNullOrEmpty(EditorSceneManager.GetActiveScene().path))
                    EditorSceneManager.OpenScene(Level1SceneBuilder.ScenePath);
                return;
            }
            if (AssetDatabase.LoadAssetAtPath<GameObject>(Level1SceneBuilder.CastlePath) == null)
            {
                Debug.LogWarning("[BubbleWash] The castle GLB is not imported yet. Make sure the glTFast package finished installing, then use Bubble Wash > 1. Build Level 1 Scene.");
                return;
            }
            Debug.Log("[BubbleWash] First open: building the Level 1 scene from the Meshy models...");
            Level1SceneBuilder.Build();
        }
    }
}
