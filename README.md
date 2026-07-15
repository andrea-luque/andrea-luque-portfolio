# Andrea Luque Martín — Portfolio

Minimal, editorial portfolio site for a cultural manager & curator.
Plain HTML/CSS/JS — no build step, no dependencies to install.
Trilingual: English, Español, Català.

## Structure

```
index.html     the page shell (sidebar + content area)
style.css      all styling
data.js        ALL the text on the site, in 3 languages — edit this file to update content
app.js         tiny router that shows the right section in the right language
assets/
  favicon.svg
  cv/          put your CV PDF here
  photos/      put project photos here
```

## Editing content

Everything you'd want to change — your bio, exhibitions, CV entries,
education, contact links — lives in **`data.js`**. It's split into three
blocks: `en`, `es`, `ca`. Find the text in quotes and edit it directly.
No other file needs to change for a text update.

To add a new curatorial project: copy one of the objects inside
`curatorial.projects` (in all three languages) and edit the fields.
The `slug` becomes the URL, so keep it short and dash-separated.

To add your CV as a downloadable PDF: drop the file in `assets/cv/`
and check the filename matches `SITE.cvPdf` at the top of `data.js`.

To add photos to a project page: see `assets/photos/README.txt`.

## Running locally

No build step needed — just open `index.html` in a browser, or serve
the folder locally so `fetch`/routing behaves exactly like it will on
GitHub Pages:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `andrea-portfolio`).
2. Push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/andrea-portfolio.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source →
   Deploy from a branch**, pick `main` and `/ (root)`, save.
4. After a minute your site is live at:
   `https://<your-username>.github.io/andrea-portfolio/`

If you'd rather use a custom domain, add a `CNAME` file with your
domain in it at the root of the repo, and point your domain's DNS at
GitHub Pages (GitHub's docs walk through this under the same Pages
settings page).

## Notes on the design

- Navigation is a fixed left sidebar; the main area shows one section
  at a time — it opens on "Home" and every other section is one click
  away, matching how you described it.
- The language switcher (EN / ES / CA) swaps every piece of text on
  the page instantly and keeps you on the same section.
- Routing uses URL hashes (`#/en/curatorial/...`), so every section
  and every project has its own shareable link, and back/forward
  browser buttons work.
