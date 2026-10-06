# Fathil Ahamed – Portfolio

Static site (HTML + CSS + vanilla JavaScript). No build step, no dependencies.

## Run locally
Open `index.html`, or run `python3 -m http.server 8000` and visit http://localhost:8000

## 1. Set your live URL (needed for LinkedIn previews)
LinkedIn needs absolute URLs for the preview card. After you know your live address:
```
./set-domain.sh https://your-live-site.com
```
This replaces `YOUR-DOMAIN` in `index.html`, `sitemap.xml` and `robots.txt`. Then paste your URL into LinkedIn's Post Inspector (linkedin.com/post-inspector) to refresh the preview.

## 2. Replace content
| What | Where |
|---|---|
| Profile photo | `assets/profile/profile.jpg` and `profile.webp`, `profile-600.webp` (same picture, 3 sizes) |
| Resume | `assets/Fathil_Ahamed_Professional_Resume.pdf` |
| Social preview | `assets/og-image.jpg` (1200×630) |
| Project screenshots | `assets/projects/`, then set `main` / `shots` in `PROJECTS` in `script.js`. Concept visuals disappear once `main` is set. |
| Project links | `github` / `live` in `PROJECTS`. Buttons appear only when filled. |
| UI/UX phone screens | `assets/uiux/`, then `images: [...]` (one per screen, in order) and `gallery: [...]` in `UIUX`. Edit `tools`, `approach`, `case`. |
| Design gallery | `assets/design/`, then `src` and `alt` in `DESIGNS` |
| Certificate images | `assets/certificates/` (folder ready; not displayed yet) |

The three phone projects (Finance, Productivity, E-Commerce) are placeholder structures with sample data. "Concept Visual" project images are demonstrations, not screenshots.

## Deploy
- **GitHub Pages:** push to a repo, Settings → Pages → `main` / root.
- **Netlify:** drag the folder onto app.netlify.com/drop.
- **Vercel:** import the repo, framework "Other", no build command.

## Contact form
No backend: it validates, then opens the visitor's email app (`mailto:`). Connect a service such as Formspree for direct delivery.
