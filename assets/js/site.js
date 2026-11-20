(() => {
  const doc = document;
  const root = doc.documentElement;
  const header = doc.querySelector("[data-header]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Sticky header state, including the dark contact/footer region
  const darkRegion = doc.querySelector("[data-dark-header]");
  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 18);
    if (darkRegion) {
      const box = darkRegion.getBoundingClientRect();
      header.classList.toggle("is-on-dark", box.top <= 96 && box.bottom > 96);
    }
  };

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });
  window.addEventListener("resize", setHeaderState);

  // Reveal content as it enters the viewport. Only opt into hidden states once
  // this script is running, so a failed script never leaves the page blank.
  const revealItems = doc.querySelectorAll("[data-reveal]");
  if (!reduceMotion && "IntersectionObserver" in window && revealItems.length) {
    root.classList.add("reveal-enabled");
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  // Close the mobile menu after choosing a destination
  const menu = doc.querySelector("[data-mobile-menu]");
  if (menu) {
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => menu.removeAttribute("open"));
    });

    doc.addEventListener("click", (event) => {
      if (!menu.open) return;
      if (!menu.contains(event.target)) menu.removeAttribute("open");
    });

    doc.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menu.open) {
        menu.removeAttribute("open");
        menu.querySelector("summary")?.focus();
      }
    });
  }

  // Make the current section legible in the top navigation
  const navLinks = [...doc.querySelectorAll(".site-nav a[href*='#']")];
  const sections = navLinks
    .map((link) => {
      const id = link.getAttribute("href")?.split("#")[1];
      return id ? doc.getElementById(id) : null;
    })
    .filter(Boolean);

  if (!reduceMotion && "IntersectionObserver" in window && sections.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => {
            const isCurrent = link.getAttribute("href")?.endsWith(`#${entry.target.id}`);
            if (isCurrent) link.setAttribute("aria-current", "true");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // Publications: search, sort, and result count
  const pubList = doc.querySelector("[data-pub-list]");
  if (pubList) {
    const rows = [...pubList.querySelectorAll(".pub-row")];
    const search = doc.querySelector("[data-pub-search]");
    const count = doc.querySelector("[data-pub-count]");
    const empty = doc.querySelector("[data-pub-empty]");
    const sortButtons = [...doc.querySelectorAll("[data-pub-sort]")];
    let sortMode = "newest";

    const applyPublicationFilters = () => {
      const query = (search?.value || "").trim().toLowerCase();
      let visible = 0;

      rows.forEach((row) => {
        const matches = !query || (row.dataset.search || "").includes(query);
        row.hidden = !matches;
        if (matches) visible += 1;
      });

      const ordered = [...rows].sort((a, b) => {
        const yearDiff = Number(b.dataset.year) - Number(a.dataset.year);
        const citeDiff = Number(b.dataset.cites) - Number(a.dataset.cites);
        return sortMode === "cited" ? citeDiff || yearDiff : yearDiff || citeDiff;
      });
      ordered.forEach((row) => pubList.appendChild(row));

      if (count) count.textContent = `${visible} of ${rows.length} works`;
      if (empty) empty.hidden = visible !== 0;
    };

    sortButtons.forEach((button) => {
      button.addEventListener("click", () => {
        sortMode = button.dataset.pubSort || "newest";
        sortButtons.forEach((item) => {
          item.setAttribute("aria-pressed", String(item === button));
        });
        applyPublicationFilters();
      });
    });

    search?.addEventListener("input", applyPublicationFilters);
    applyPublicationFilters();
  }

  // Current year in the footer (scoped so publication data attributes are safe)
  doc.querySelectorAll(".site-footer [data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
})();
