
# Portfolio

A Vue 3 portfolio built with Vite and Tailwind CSS.

## Local development

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite.

## Deploy to Vercel

1. Commit and push the portfolio changes to GitHub.
2. In the Vercel dashboard, select **Add New > Project** and import this repository.
3. Use the repository root as the root directory. The included `vercel.json`
   configures the Vite framework, `npm run build` command, and `dist` output directory.
4. Leave the install command at its default. This static portfolio requires no
   environment variables.
5. Select **Deploy** and open the generated deployment URL.

Subsequent pushes to the project's production branch trigger new deployments.
The app is hosted at the domain root; section navigation uses URL fragments.

To check the production build locally:

```powershell
npm run build
npm run preview
```
