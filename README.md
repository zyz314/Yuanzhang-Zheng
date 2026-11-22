# Yuanzhang Zheng, PhD — AIDD portfolio

A fast, hand-built static personal site for **Dr. Yuanzhang Zheng**, an AIDD leader combining more than a decade of structure-based drug discovery with an M.S. in Computer Science (AI) from Georgia Tech. The site is designed for AIDD roles: it foregrounds AI drug discovery, protein and antibody design, model evaluation, and the experimental judgment behind the models.

Live site: **https://zyz314.github.io/Yuanzhang-Zheng/**

## Positioning

The site is intentionally editorial rather than product-like: a warm paper background, large Source Serif headlines, IBM Plex Sans body text, generous whitespace, thin rules, and real research figures. There are no card grids, pill buttons, floating chips, decorative gradients, or stock science imagery.

- **Home** — AIDD positioning, four selected AIDD projects, capabilities, the 27-model testing program, publications, experience, education, and contact.
- **AIDD Model Testing** — 27 technical briefs for open-source AIDD models and tools, with a standard structure: what it does, the AI principle, where it breaks, how to improve it, and an open test log.
- **Research** — AIDD and structural-biology projects grouped by career stage, plus 14 collaborator portraits.
- **Project pages** — long-form research narratives with figures, metrics, collaborators, outputs, and disclosure notes.
- **Publications** — the full 28-work record without filters or dashboard chrome.
- **CV** — an AIDD-first web CV with a print stylesheet and a three-page PDF.

## What is here

| Path | Purpose |
| --- | --- |
| `index.html` | Home: AIDD positioning, selected work, model testing, publications, experience, education, contact |
| `aidd/index.html` | AIDD Model Testing catalogue: 27 briefs in 9 groups |
| `aidd/<slug>/index.html` | Individual model briefs with AI principles, failure modes, improvement angles, and test placeholders |
| `research/index.html` | Research archive with 13 project pages and 14 collaborator portraits |
| `research/<slug>/index.html` | Individual project pages with figures, data, and collaborators |
| `publications.html` | Full 28-work publication record |
| `cv.html` | Web CV with print styling |
| `assets/files/Yuanzhang-Zheng-CV.pdf` | Downloadable three-page PDF CV |
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

- **Text:** edit the relevant HTML page directly. The 27 AIDD pages are static; update each page's "My test" section as results arrive.
- **Styles:** `assets/css/site.css` for the main site; `assets/css/aidd.css` for the AIDD catalogue and model briefs.
- **Interactions:** `assets/js/site.js` handles the mobile menu, footer year, and minor progressive enhancements.
- **Images:** `assets/images/research/` for project pages and collaborator portraits; `assets/images/work/` for the antibody case study.
- **CV:** edit `cv.html`, then regenerate `assets/files/Yuanzhang-Zheng-CV.pdf` from the print view. The current PDF is three pages.

## Deployment

GitHub Pages is configured to deploy from the **`master` branch, repository root**. Every push to `master` updates the live site automatically. No Actions workflow is required.

## Content sources

- Profile and current role: [LinkedIn](https://www.linkedin.com/in/yuanzhang-zheng-phd-113477ab/)
- Education and publication history: [ORCID 0000-0002-2519-5321](https://orcid.org/0000-0002-2519-5321)
- Publication metrics and citation counts: [Google Scholar](https://scholar.google.com/citations?user=YLsxMNQAAAAJ&hl=en), sampled November 2026
- AIDD model catalogue: Dr. Zheng's `AIDD_Open_Source_Models_2026.xlsx`, compiled November 2026.
- Model briefs: linked paper and GitHub repository for each model, plus the November 2026 hands-on project table and targeted web research for the 2026 releases.
- Antibody project data and figures: [Antibody-Design-Zolbetuximab](https://github.com/zyz314/Antibody-Design-Zolbetuximab)
- Research project text, figures, and collaborator portraits: Dr. Zheng's April 2024 research summary presentation, supplied by the site owner.
- Synbio AIDD project text and figures: Dr. Zheng's Synbio AI Gene / AIDD presentation, supplied by the site owner.

## Notes

- The AIDD model pages are technical briefs, not benchmark claims. Model details come from the linked papers and repositories; each page records its own access caveats and test status.
- The test sections are intentionally empty until Dr. Zheng runs each model. The first planned campaign is a 2,000-design RFantibody run.
- The antibody design project is a computational methods case study. It has **no experimental validation** and is not a therapeutic or clinical claim.
- Citation metrics change over time; update them on the home page, publications page, and CV when needed.
- Some research pages summarize unpublished or client-related work (Curia, CHDI, Moderna, and the GCase program). Confirm disclosure permissions before reusing those figures or details.
- The site is dependency-free — no Jekyll, Node build, or external JavaScript libraries.

---

© Yuanzhang Zheng, PhD. Personal content and project figures are not licensed for reuse without permission.
