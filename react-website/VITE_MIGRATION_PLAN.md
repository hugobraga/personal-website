Vite migration plan for react-website

Goal
- Migrate the `react-website` app (currently built with Create React App / react-scripts) to Vite (React + Vite) to:
  - simplify the build toolchain,
  - reduce the dependency surface and vulnerabilities,
  - speed up dev startup and HMR.

Overview
- Current stack: React 18 (Create React App / react-scripts@5.x), Sass (dart-sass), MUI, react-router-dom, i18next.
- Target stack: React 18 + Vite (latest stable), @vitejs/plugin-react, Sass support via Vite, same runtime libraries (React, MUI, etc.).

High-level steps
1) Create a migration branch
   - git checkout -b refactor/migrate-to-vite

2) Install Vite and plugin
   - cd react-website
   - npm install --save-dev vite @vitejs/plugin-react

3) Update package.json scripts
   - Replace CRA scripts with Vite equivalents:
     "start": "vite",
     "build": "vite build",
     "test": (keep as-is if using react-scripts test runner, see note),
     "serve": "vite preview"

4) Create Vite config
   - Create `vite.config.js` at `react-website/`:
     import { defineConfig } from 'vite'
     import react from '@vitejs/plugin-react'

     export default defineConfig({
       plugins: [react()],
       build: {
         outDir: 'build', // CRA uses `build` by default; keeps parity
       },
     })

5) Update index.html
   - Vite expects an `index.html` in the project root (inside `react-website/`) with module script entry.
   - Move/adjust `public/index.html` into `react-website/index.html` or update paths.
   - Example minimal index.html:
     <!doctype html>
     <html>
       <head>
         <meta charset="utf-8" />
         <meta name="viewport" content="width=device-width,initial-scale=1" />
         <title>React Website</title>
       </head>
       <body>
         <div id="root"></div>
         <script type="module" src="/src/index.js"></script>
       </body>
     </html>

   - Ensure static assets referenced in `public/` are copied or referenced correctly (Vite serves `/public` by default if placed under `public` root).

6) Assets & public folder
   - Vite will serve `public/` statically; keep `react-website/public/*` as-is and update `index.html` to reference assets with `/` absolute paths (e.g. `/logo192.png`).

7) CSS / Sass
   - Vite supports Sass out-of-the-box if `sass` is installed (already present). Keep `.scss`/`.sass` files and imports.

8) Environment variables
   - CRA uses `process.env.REACT_APP_*` and `.env` files.
   - Vite uses `import.meta.env.VITE_*`.
   - Strategy:
     - For build-time variables, rename them to `VITE_` prefix and update code references where necessary.
     - You can still access `process.env` for some variables, but prefer `import.meta.env`.

9) Replacing service worker / manifest
   - If using CRA PWAs, follow Vite PWA plugins; otherwise keep `public/manifest.json` and wire as needed.

10) Dev server proxy
   - CRA proxy setting can be mapped to Vite's `server.proxy` in `vite.config.js`.
   - Example:
     server: { proxy: { '/api': { target: 'http://localhost:3001', changeOrigin: true } } }

11) React testing
   - CRA test runner uses Jest; you can keep Jest (no change) or migrate tests to Vite-friendly runners (Vitest).
   - If keeping Jest, keep `npm test` as-is; ensure config paths still point to correct files.

12) Build & preview
   - npm run build
   - npm run serve (vite preview)

13) CI / Vercel
   - Update Vercel settings/build command to `npm run build` (Vite build) and output folder `build` (keeps parity with CRA). Vercel auto-detects Vite but confirm in Project settings.

14) Clean up
   - Remove `react-scripts` and related unused devDependencies from `package.json` after all tests pass.

Detailed checklist for PRs
- PR: refactor/migrate-to-vite
  - [ ] Branch created from `refactor/node_22` (or master)
  - [ ] `vite` and `@vitejs/plugin-react` added to devDependencies
  - [ ] `vite.config.js` added and tested locally
  - [ ] `index.html` moved/adjusted to use Vite module entry
  - [ ] Scripts updated in `package.json` (`start`, `build`, `serve`)
  - [ ] Dev proxy configured if required
  - [ ] Environment variables documented and updated
  - [ ] Build passes: `npm run build` -> `build/` created
  - [ ] Dev server works: `npm start` with HMR
  - [ ] All tests pass or a plan to migrate test runner
  - [ ] CI updated (Vercel settings) and pipeline passes
  - [ ] README updated with Vite instructions

Risks and mitigations
- Risk: Some CRA-specific behavior (like service worker or environment var handling) differs. Mitigation: test PWA features and env vars, provide migration mapping.
- Risk: Tests relying on CRA environment may fail. Mitigation: keep Jest setup, run tests and migrate gradually.

Time estimate
- Small app (this repo): 1-2 work days of focused work to migrate and validate.
- If tests/complex service worker/custom webpack config exist, add 1-2 more days.

Follow-ups (I can do)
- Create the PR branch and implement the migration changes, run local tests and fix regressions.
- Or generate a step-by-step patch/diff for you to review before committing.

---

If quiser, eu crio imediatamente a branch `refactor/migrate-to-vite` e implemento os passos iniciais (instalação do Vite, `vite.config.js`, atualização dos scripts e `index.html`) e abro um PR de rascunho. Deseja que eu faça isso agora?