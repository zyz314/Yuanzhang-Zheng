# Yuanzhang Zheng — personal site

A fast, hand-built static personal site and research portfolio for **Yuanzhang Zheng**, a computational structural biologist and Associate Director of Operations at Synbio Technologies.

Live site: **https://zyz314.github.io/Yuanzhang-Zheng/**

## Design

The site is intentionally editorial rather than product-like: a warm paper background, large Source Serif headlines, IBM Plex Sans body text, generous whitespace, thin rules, and real research figures. There are no card grids, pill buttons, floating chips, decorative gradients, or stock science imagery.

- **Home** — a short introduction, four selected research stories, a 13-project index, selected publications, experience, and contact.
- **Research** — three featured stories, a complete project index grouped by career stage, and 14 collaborator portraits.
- **Project pages** — long-form research narratives with figures, metrics, collaborators, outputs, and a disclosure note where needed.
- **Publications** — the full 28-work record without filters or dashboard chrome.
- **CV** — a web CV with a print stylesheet and a downloadable PDF.

## What is here

| Path | Purpose |
| --- | --- |
| `index.html` | Home: about, selected research, research index, publications, experience, contact |
| `research/index.html` | Research archive with 13 project pages and 14 collaborator portraits |
| `research/<slug>/index.html` | Individual project pages with figures, data, and collaborators |
| `publications.html` | Full 28-work publication record |
| `cv.html` | Web CV with print styling |
| `assets/files/Yuanzhang-Zheng-CV.pdf` | Downloadable PDF CV |
| `work/antibody-design/index.html` | Detailed antigen-guided antibody design case study |
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
- **Styles:** `assets/css/site.css` is the single stylesheet for the whole site.
- **Interactions:** `assets/js/site.js` handles the mobile menu, footer year, and minor progressive enhancements.
- **Images:** `assets/images/research/` for project pages and collaborator portraits; `assets/images/work/` for the antibody case study.
- **CV:** edit `cv.html`, then regenerate `assets/files/Yuanzhang-Zheng-CV.pdf` from the print view. The current PDF is three pages.

## Deployment

GitHub Pages is configured to deploy from the **`master` branch, repository root**. Every push to `master` updates the live site automatically. No Actions workflow is required.

## Content sources

- Profile and current role: [LinkedIn](https://www.linkedin.com/in/yuanzhang-zheng-phd-113477ab/)
- Education and publication history: [ORCID 0000-0002-2519-5321](https://orcid.org/0000-0002-2519-5321)
- Publication metrics and citation counts: [Google Scholar](https://scholar.google.com/citations?user=YLsxMNQAAAAJ&hl=en), sampled November 2026
- Antibody project data and figures: [Antibody-Design-Zolbetuximab](https://github.com/zyz314/Antibody-Design-Zolbetuximab)
- Research project text, figures, and collaborator portraits: Dr. Zheng's April 2024 research summary presentation, supplied by the site owner.
- Synbio AIDD project text and figures: Dr. Zheng's Synbio AI Gene / AIDD presentation, supplied by the site owner.

## Notes

- The antibody design project is a computational methods case study. It has **no experimental validation** and is not a therapeutic or clinical claim.
- Citation metrics change over time; update them on the home page, publications page, and CV when needed.
- Some research pages summarize unpublished or client-related work (Curia, CHDI, Moderna, and the GCase program). Confirm disclosure permissions before reusing those figures or details.
- The site is dependency-free — no Jekyll, Node build, or external JavaScript libraries.

---

© Yuanzhang Zheng. Personal content and project figures are not licensed for reuse without permission.
