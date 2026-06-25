# Publish the CSV Import Page

This page is a static website. That makes it easy to publish publicly with GitHub Pages.

## Recommended option: dedicated public repository

Use a separate repository if you want:

- a clean public URL
- no risk of exposing the full app repository
- simpler maintenance for this tool

Suggested repository name:

- `aerolog-csv-import`
- `logbook-csv-import`
- `csv-import-for-aerolog`

Files to publish:

- `index.html`
- `styles.css`
- `app.js`

## Quick setup

1. Create a new **public** repository on GitHub.
2. Copy the three files above into the repository root.
3. Commit and push to the `main` branch.
4. In GitHub, open `Settings` > `Pages`.
5. In **Build and deployment**, choose:
   - `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
6. Save.

GitHub will give you a public URL like:

`https://your-username.github.io/aerolog-csv-import/`

## Good to know

- No server is required.
- The CSV file stays in the browser.
- The generated JSON files are downloaded locally by the user.
- This is well suited for GitHub Pages.

## Alternative

If you prefer, this page can also be published from the current repository:

- either from a dedicated `docs/` folder
- or from a dedicated branch such as `gh-pages`

That works too, but a separate public repository is usually cleaner for this kind of tool.

## Recommended next step

If you want, the next step can be one of these:

1. I prepare this folder so it is ready to be copied into a public GitHub repo.
2. I add a small `README.md` for the public repo.
3. I help you publish it directly with GitHub Pages.
