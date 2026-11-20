# Yuanzhang Zheng — personal site

A fast, hand-built static personal site and research portfolio for **Yuanzhang Zheng**, a computational structural biologist working on protein design, antibody engineering, and AI for drug discovery.

Live site: **https://zyz314.github.io/Yuanzhang-Zheng/**

## What is here

| Path | Purpose |
| --- | --- |
| `index.html` | Home: about, selected work, publications, experience, contact |
| `work/index.html` | Portfolio index, including software side projects |
| `work/antibody-design/index.html` | Detailed antigen-guided antibody design case study |
| `cv.html` | Web CV with print / save-as-PDF styling |
| `404.html` | GitHub Pages 404 page |
| `assets/` | Self-hosted fonts, CSS, JS, and optimized images |
| `.nojekyll` | Tells GitHub Pages to serve the static files without Jekyll processing |

## Local preview

No build step is required. From this directory:

```bash
python -m http.server 8000
```

Then open <http://127.0.0.1:8000/>.

## Editing

- **Text:** edit the relevant HTML page directly.
- **Styles:** `assets/css/site.css` (design tokens are at the top under `:root`).
- **Interactions:** `assets/js/site.js` (sticky header, scroll reveals, mobile menu).
- **Images:** `assets/images/`; project figures are in `assets/images/work/`.
- **CV:** edit `cv.html`. The print button uses the browser's print dialog; `@media print` styles are included.

## Deployment

GitHub Pages is configured to deploy from the **`master` branch, repository root**. Every push to `master` updates the live site automatically. No Actions workflow is required.

## Content sources

- Profile, education, and roles: [ORCID 0000-0002-2519-5321](https://orcid.org/0000-0002-2519-5321)
- Publication metrics and citation counts: [Google Scholar](https://scholar.google.com/citations?user=YLsxMNQAAAAJ&hl=en), sampled November 2026
- Antibody project data and figures: [Antibody-Design-Zolbetuximab](https://github.com/zyz314/Antibody-Design-Zolbetuximab)

## Notes

- The antibody design project is a computational methods case study. It has **no experimental validation** and is not a therapeutic or clinical claim.
- Citation metrics change over time; update them on the home page and CV when needed.
- The site is intentionally dependency-free — no Jekyll, Node build, or external JS libraries.

---

© Yuanzhang Zheng. Personal content and project figures are not licensed for reuse without permission.
