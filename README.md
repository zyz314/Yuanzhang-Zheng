# Yuanzhang Zheng — personal site

A fast, hand-built static personal site and research portfolio for **Yuanzhang Zheng**, a computational structural biologist and Associate Director of Operations at Synbio Technologies, working across protein design, scientific operations, and AI for drug discovery.

Live site: **https://zyz314.github.io/Yuanzhang-Zheng/**

## What is here

| Path | Purpose |
| --- | --- |
| `index.html` | Home: about, selected work, publications, experience, contact |
| `publications.html` | Full 28-work publication record with search and citation sorting |
| `work/index.html` | Portfolio index, including software side projects |
| `work/antibody-design/index.html` | Detailed antigen-guided antibody design case study |
| `research/index.html` | Research archive with 13 project pages and 14 collaborator portraits |
| `research/<slug>/index.html` | Individual project pages with figures, data, and collaborators |
| `cv.html` | Web CV with print styling |
| `assets/files/Yuanzhang-Zheng-CV.pdf` | Downloadable two-page PDF CV |
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
- **Styles:** `assets/css/site.css` for the main site and `assets/css/research.css` for the research archive.
- **Interactions:** `assets/js/site.js` (sticky header, scroll reveals, mobile menu, publication filters).
- **Images:** `assets/images/work/` for the antibody case study; `assets/images/research/` for the project pages and 14 collaborator portraits.
- **CV:** edit `cv.html`. The two-page PDF is `assets/files/Yuanzhang-Zheng-CV.pdf`; regenerate it from the page after content changes. `@media print` styles are included.

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
- Citation metrics change over time; update them on the home page and CV when needed.
- Some research pages summarize unpublished or client-related work (Curia, CHDI, Moderna, and the GCase program). Confirm disclosure permissions before reusing those figures or details.
- The site is intentionally dependency-free — no Jekyll, Node build, or external JS libraries.

---

© Yuanzhang Zheng. Personal content and project figures are not licensed for reuse without permission.
