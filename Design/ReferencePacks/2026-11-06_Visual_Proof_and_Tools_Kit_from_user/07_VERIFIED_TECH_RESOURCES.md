# Verified official resources

1. Spector.js Chrome extension: https://chromewebstore.google.com/detail/spectorjs/denbgaamihkadbghdceggmchnflmhpmk . Already used in the project; inspect exact WebGL draw-call state and shader inputs. Not a magic auto-fixer.
2. Needle Inspector — three.js developer tools: https://engine.needle.tools/docs/three/needle-devtools-for-threejs-chrome-extension/ . OPTIONAL. Useful to inspect mesh hierarchy, heroSwell, material, lights, camera. Free browser scene inspection; some live editing/MCP features require Pro. It is not known to be installed in Claude's remote browser.
3. Three.js Material docs: https://threejs.org/docs/pages/Material.html . Relevant to `transparent`, `opacity`, `toneMapped` and `onBeforeCompile`; inspect carefully before changes.
4. Playwright screenshot capture: https://playwright.dev/docs/screenshots . Existing Playwright should capture real gameplay frames at repeatable view/seed/position, not a fake composite.
5. scikit-image SSIM explanation: https://scikit-image.org/docs/stable/auto_examples/transform/plot_ssim.html . Structural comparison but not a replacement for visual art direction.

Most effective combo: Spector + Three.js layer-isolation + Playwright + local OpenCV/scikit-image color/texture diagnostics + human visual review. LPIPS/Optuna are OPTIONAL supporting tools and have previously selected the wrong water style. Blender and Needle Inspector only when a specific missing capability is demonstrated. Avoid Tripo/Meshy for animated shaders/water.
