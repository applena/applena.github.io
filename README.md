# Lena Eivy Website

This repository contains a static personal website for Lena Eivy, designed as a creative portfolio hub.

## Site focus

The homepage is organized around four pillars:

- Photography
- Writing
- Experiments
- Resources

It also includes sections for essay ideas, a public notebook, and contact details.

## Local preview

Run a local server from the repository root:

```bash
python3 -m http.server 8080
```

Then open <http://localhost:8080>.

## GitHub Pages deployment

A GitHub Actions workflow is included at `.github/workflows/deploy.yml`.

To publish with GitHub Pages:

1. Push this repository to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Ensure your default branch is `main` (or update the workflow trigger branch).
4. Push a commit to `main` to trigger deployment.
