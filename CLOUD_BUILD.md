# Play Bubble Wash Kingdom in a browser, without installing Unity

The same Unity 6.3 project is built for **WebGL** in the cloud. You then open a link and play in Chrome, Edge or Safari, on a laptop or a phone.

What you get is the real Unity game:
- the Meshy castle and drum;
- the moving pink mascot;
- the rushing water and the follow camera;
- swipe controls on touch screens, mouse drags and arrow keys on a laptop.

The project is already set up for this:
- `CloudBuild.cs` generates the Level 1 scene from the Meshy models during the cloud build.
- WebGL is set to Gzip with decompression fallback, so it runs on any web host.
- A portrait game page is included (`Assets/WebGLTemplates/BubbleWash`).
- A ready-made GitHub Actions workflow is included (`.github/workflows/webgl-build.yml`).

There are two cloud routes. **Route A needs no installation at all.** Route B needs Unity Hub once, only to create a licence file.

---

## Route A: Unity Build Automation (Unity's own cloud build, no installs)

What you need: a free Unity account and a web browser. Unity's DevOps plan includes free monthly build minutes; at the time of writing, 200 Windows minutes per month. Unity may ask you to add a payment method before Build Automation is switched on. That is Unity's requirement, and usage within the free minutes isn't charged.

1. Go to **https://cloud.unity.com** and sign in or create a free Unity ID.
2. Create a project called **Bubble Wash Kingdom**.
3. Open **DevOps → Build Automation** and click **Get started / Set up**.
4. **Connect source control: GitHub.**
   - Authorise Unity's GitHub app for the private repository **josiahscalia5-dev/bubblegame**.
   - Branch: **`claude/new-session-oth0dd`**.
   - Project folder: leave empty (the repository root is the Unity project).
5. **Add a build target.**

   | Setting | Value |
   |---|---|
   | Platform | **WebGL** |
   | Unity version | **6000.3.27f2**, or the latest 6000.3 offered |
   | Advanced → **Pre-export method name** | `BubbleWash.EditorTools.CloudBuild.PreExport` |

6. Click **Build**. The first build takes roughly 30–60 minutes, because it imports both GLBs and compiles the shaders.
7. When it succeeds, click **Download**. You get a zip of the WebGL build.
8. Turn the zip into a link (no installs). Use either:
   - **itch.io** (can be kept private):
     1. Create a free account and choose **Upload new project**. Set **Kind of project** to **HTML**, and upload the zip.
     2. Tick **This file will be played in the browser**.
     3. Viewport: **540 × 1080**. Also tick **Mobile friendly** and **Fullscreen button**, and set orientation to **Portrait**.
     4. Visibility: **Draft** or **Restricted**, so only you can see it.
     5. Save, then **View page → Run game**.
   - **Netlify Drop**: unzip, open **https://app.netlify.com/drop**, and drag the unzipped folder (the one containing `index.html`) onto the page. You get a link immediately. Create a free account to keep it.

---

## Route B: GitHub Actions + GameCI (builds automatically on GitHub)

Choose this if Unity Build Automation asks for payment details you don't want to give. GitHub's free Actions minutes are used.

**One-time step: get a free Unity licence file.** Install only **Unity Hub**, not the editor.
1. Install Unity Hub from https://unity.com/download.
2. Sign in, then open **Preferences → Licenses → Add → Get a free personal license**.
3. Open `C:\ProgramData\Unity\Unity_lic.ulf` in Notepad and copy everything.

You can uninstall Unity Hub afterwards.

1. On GitHub, open the repository, then **Settings → Secrets and variables → Actions → New repository secret**. Add:
   - `UNITY_LICENSE`: the whole content of `Unity_lic.ulf`;
   - `UNITY_EMAIL`: your Unity account email;
   - `UNITY_PASSWORD`: your Unity account password.
2. Optional: publish to itch.io automatically.
   1. Create the itch.io project once as described in Route A.
   2. Create an API key at **itch.io → Settings → API keys**.
   3. Add it as secret `ITCH_API_KEY`.
   4. Add a repository **variable** (Settings → Secrets and variables → Actions → Variables) `ITCH_GAME` = `yourname/bubble-wash-kingdom`.
3. Open **Actions → "WebGL build (browser version)" → Run workflow** on branch `claude/new-session-oth0dd`.
4. When it finishes (30–60 minutes the first time, faster after that):
   - with itch.io set up, the run summary shows the play link;
   - otherwise, download **BubbleWashKingdom-WebGL** from the run's Summary page and drag the unzipped folder to Netlify Drop.

GitHub Pages can't serve this repository on a free GitHub plan, because the repository is private. With a paid plan, or a public repository, set repository variable `DEPLOY_PAGES` = `true` and Pages source = **GitHub Actions** to get a GitHub Pages link instead.

---

## What to expect in the browser

- **Laptop:**
  - The game appears as a portrait phone-shaped view.
  - Click or press Space to start.
  - Drag left/right or use the arrow keys or A/D to steer; up/W to jump; down/S to dive; click while running to spin.
- **Phone:**
  - Open the same link; the game fills the screen.
  - Tap to start, swipe to steer, jump and dive, and tap to spin.
- **First load:** about 40–60 MB (the two detailed Meshy models). Later visits load from the browser cache.
- **If it fails to start:** the page shows the error message. Send me a screenshot of it, plus the build log from the cloud service.

## Not yet verified

These files and settings were prepared and compile-checked in a cloud environment without Unity. **The first real WebGL build will be the first time the project runs in Unity**, so the first build log is the thing to send me if anything fails.
