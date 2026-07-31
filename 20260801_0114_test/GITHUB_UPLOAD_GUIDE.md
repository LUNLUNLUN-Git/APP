# GitHub Pages upload guide

This folder has been prepared for a Vite-based static website.

## Publish it

1. Create a new empty GitHub repository. Do not add a README, .gitignore, or license during creation.
2. In this folder, open Git Bash or PowerShell and run:

   ```bash
   git add .
   git commit -m "Publish WebAR site"
   git branch -M main
   git remote add origin https://github.com/YOUR_ACCOUNT/YOUR_REPOSITORY.git
   git push -u origin main
   ```

3. On GitHub, open **Settings -> Pages** and set **Build and deployment / Source** to **GitHub Actions**.
4. Open the repository **Actions** tab and wait for **Deploy static site to GitHub Pages** to finish.
5. The published URL is normally:

   `https://YOUR_ACCOUNT.github.io/YOUR_REPOSITORY/`

## What GitHub Pages can and cannot provide

- It can host the HTML, JavaScript, CSS, images, GLB files, client-side uploads, QR codes, and browser-based WebAR preview.
- It cannot run Express, Node API routes, databases, server-side file uploads, private API keys, or AI inference servers.
- AR requires HTTPS and a compatible physical phone. Android commonly needs GLB plus ARCore; iOS Quick Look commonly needs USDZ.

## Project compatibility

The generated workflow builds Vite projects. If this project needs a server at runtime, use a server host such as Render, Railway, Cloud Run, or Vercel instead of GitHub Pages.