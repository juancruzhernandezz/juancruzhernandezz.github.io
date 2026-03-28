# Juan Cruz Hernández — Personal Website

A minimal, clean personal website built with HTML, CSS, and JavaScript.

## Deploy on GitHub Pages

1. **Create a GitHub repository** named exactly `<your-username>.github.io`
   - For example: `abc.github.io` (your GitHub username must be `abc`)

2. **Push the code** from this folder to that repository:
   ```bash
   cd "path/to/this/folder"
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**: Go to the repo Settings > Pages > Source: `main` branch, folder: `/ (root)` > Save.

4. Your site will be live at `https://<your-username>.github.io` within a few minutes.

## Structure

```
index.html          — Main page (Home, About, Contact)
css/style.css       — Styles
js/script.js        — Navigation & scroll animations
assets/favicon.svg  — JCH favicon/logo
```
