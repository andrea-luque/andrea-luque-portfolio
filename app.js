/* ==========================================================================
   app.js — tiny hash router + renderer. No framework, no build step.
   Routes look like:  #/en/home   #/es/curatorial   #/ca/curatorial/slug
   ========================================================================== */

(function () {
  const VALID_LANGS = ["en", "es", "ca"];
  const VALID_VIEWS = ["home", "about", "curatorial", "practice", "cv", "education", "contact"];
  const DEFAULT_LANG = "en";

  const contentEl = document.getElementById("content");
  function parseHash() {
    const raw = location.hash.replace(/^#\/?/, "");
    const parts = raw.split("/").filter(Boolean);

    let lang = parts[0];
    if (!VALID_LANGS.includes(lang)) lang = DEFAULT_LANG;

    let view = parts[1] || "home";
    if (!VALID_VIEWS.includes(view)) view = "home";

    const slug = parts[2] || null;

    return { lang, view, slug };
  }

  function setHash(lang, view, slug) {
    const path = slug ? `#/${lang}/${view}/${slug}` : `#/${lang}/${view}`;
    if (location.hash !== path) location.hash = path;
    else render();
  }

  /* ---------------------------------------------------------------------
     Sidebar text + active states
     --------------------------------------------------------------------- */
  function renderSidebar(lang, view, slug) {
    const t = SITE.content[lang];

    document.documentElement.lang = lang;
    document.getElementById("identity-role").textContent = t.role;
    document.getElementById("sidebar-email").textContent = SITE.email;
    document.getElementById("sidebar-email").href = "mailto:" + SITE.email;
    document.getElementById("sidebar-location").textContent = t.contact.location;
    document.title = t.meta.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t.meta.description);

    // nav labels
    document.getElementById("nav-home").textContent = t.nav.home;
    document.getElementById("nav-about").textContent = t.nav.about;
    document.getElementById("nav-curatorial").textContent = t.nav.curatorial;
    document.getElementById("nav-practice").textContent = t.nav.practice;
    document.getElementById("nav-cv").textContent = t.nav.cv;
    document.getElementById("nav-education").textContent = t.nav.education;
    document.getElementById("nav-contact").textContent = t.nav.contact;

    // nav hrefs -> keep current language
    document.querySelectorAll(".main-nav a[data-route]").forEach((a) => {
      a.href = `#/${lang}/${a.dataset.route}`;
    });
    document.querySelector('.identity').href = `#/${lang}/home`;

    // sub-nav (curatorial projects)
    const subNav = document.getElementById("sub-nav-curatorial");
    subNav.innerHTML = "";
    t.curatorial.projects.forEach((p) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `#/${lang}/curatorial/${p.slug}`;
      a.textContent = p.title;
      a.dataset.slug = p.slug;
      if (view === "curatorial" && slug === p.slug) a.classList.add("active");
      li.appendChild(a);
      subNav.appendChild(li);
    });

    // active state on top-level nav
    document.querySelectorAll(".main-nav > ul > li > a").forEach((a) => {
      a.classList.toggle("active", a.dataset.route === view);
    });

    // language switch active state
    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
  }

  /* ---------------------------------------------------------------------
     View renderers — each returns an HTML string
     --------------------------------------------------------------------- */
  const views = {

    home(t) {
      return `
        <section class="view home-view">
          <p class="home-tagline">${t.home.tagline}</p>
          <div class="home-photos">
            <img class="home-photo" src="images/home/photo-1.jpg" alt="">
            <img class="home-photo" src="images/home/photo-2.jpg" alt="">
            <img class="home-photo" src="images/home/photo-3.jpg" alt="">
          </div>
        </section>`;
    },

    about(t) {
      return `
        <section class="view about-body">
          
          <h1 class="page-title">${t.about.heading}</h1>
          ${t.about.body.map((p) => `<p>${p}</p>`).join("")}
        </section>`;
    },

    curatorial(t) {
      const items = t.curatorial.projects.map((p) => `
        <a class="project-entry" href="#/${state.lang}/curatorial/${p.slug}">
          <h3 class="project-title">${p.title}</h3>
          <div class="project-meta"><span>${p.date}</span><span>${p.venue}</span></div>
        </a>`).join("");

      return `
        <section class="view">
   
          <h1 class="page-title">${t.curatorial.heading}</h1>
          <p class="muted" style="max-width:520px;margin-bottom:30px;">${t.curatorial.intro}</p>
          <div class="project-grid">${items}</div>
        </section>`;
    },

    curatorialDetail(t, slug) {
      const p = t.curatorial.projects.find((x) => x.slug === slug);
      if (!p) return views.curatorial(t);

      const images = p.images && p.images.length ? p.images : null;

      const imageBlock = images
        ? `<figure class="project-figure" data-index="0">
            <div class="project-figure-frame">
              ${images.map((img, i) => `<img src="${img.src}" alt="${img.alt || ''}" class="${i === 0 ? 'active' : ''}">`).join("")}
              <button type="button" class="gallery-arrow prev" data-dir="-1" aria-label="Previous"><span>‹</span></button>
              <button type="button" class="gallery-arrow next" data-dir="1" aria-label="Next"><span>›</span></button>
            </div>
            <figcaption class="project-caption">${images[0].caption || ""}</figcaption>
            ${images.length > 1 ? `<div class="gallery-dots">${images.map((_, i) => `<button type="button" data-goto="${i}" class="${i === 0 ? 'active' : ''}"></button>`).join("")}</div>` : ""}
          </figure>`
        : "";

      const artists = p.artists && p.artists.length
        ? `<div class="project-artists">
            <p class="project-artists-label">Featured artists</p>
            <ul class="project-artists-list">
              ${p.artists.map((name) => `<li>${name}</li>`).join("")}
            </ul>
          </div>`
        : "";

      return `
        <section class="view">
          <a class="back-link" href="#/${state.lang}/curatorial">${t.curatorial.backToList}</a>
          <div class="project-detail-columns">
            <div class="project-detail-image">${imageBlock}</div>
            <div class="project-detail-side">
              <div class="project-detail-meta"><span>${p.date}</span><span>${p.venue}</span></div>
              <h1 class="project-detail-title">${p.title}</h1>
              <div class="project-detail-body">${p.body.map((par) => `<p>${par}</p>`).join("")}</div>
              ${artists}
            </div>
          </div>
        </section>`;
    },

    practice(t) {
      const groups = t.practice.groups.map((g) => `
        <div class="skills-group">
          <p class="skills-group-label">${g.label}</p>
          <ul>${g.items.map((i) => `<li>${i}</li>`).join("")}</ul>
        </div>`).join("");

      return `
        <section class="view">
        
          <h1 class="page-title">${t.practice.heading}</h1>
          <div class="skills-groups">${groups}</div>
        </section>`;
    },

    cv(t) {
      const rows = t.cv.entries.map((e) => `
        <div class="cv-entry">
          <div class="cv-period">${e.period}</div>
          <div>
            <p class="cv-role">${e.role}</p>
            <p class="cv-place">${e.place}</p>
            <p class="cv-desc">${e.desc}</p>
          </div>
        </div>`).join("");

      return `
        <section class="view">
          
          <h1 class="page-title">${t.cv.heading}</h1>
          <div class="cv-list">${rows}</div>
          <a class="cv-download" href="${SITE.cvPdf}" download>${t.cv.downloadCv}</a>
        </section>`;
    },

    education(t) {
      const rows = t.education.entries.map((e) => `
        <div class="edu-entry">
          <p class="edu-degree">${e.degree}</p>
          <p class="edu-place">${e.place}</p>
          <p class="edu-period">${e.period}</p>
        </div>`).join("");

      return `
        <section class="view">
          
          <h1 class="page-title">${t.education.heading}</h1>
          <div class="edu-list">${rows}</div>
        </section>`;
    },

    contact(t) {
      return `
        <section class="view">
          
          <h1 class="page-title">${t.contact.heading}</h1>
          <p class="contact-intro">${t.contact.intro}</p>
          <div class="contact-list">
            <div class="contact-row">
              <span class="contact-label">${t.contact.emailLabel}</span>
              <a class="contact-value" href="mailto:${SITE.email}">${SITE.email}</a>
            </div>
            <div class="contact-row">
              <span class="contact-label">${t.contact.instagramLabel}</span>
              <a class="contact-value" href="${SITE.instagram}" target="_blank" rel="noopener">Instagram</a>
            </div>
            <div class="contact-row">
              <span class="contact-label">${t.contact.linkedinLabel}</span>
              <a class="contact-value" href="${SITE.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
            </div>
          </div>
        </section>`;
    }
  };

  /* ---------------------------------------------------------------------
     Main render
     --------------------------------------------------------------------- */
  let state = { lang: DEFAULT_LANG, view: "home", slug: null };

  function render() {
    state = parseHash();
    const t = SITE.content[state.lang];

    renderSidebar(state.lang, state.view, state.slug);

    let html;
    if (state.view === "curatorial" && state.slug) {
      html = views.curatorialDetail(t, state.slug);
    } else {
      html = views[state.view](t);
    }

    contentEl.innerHTML = html;
    contentEl.scrollTop = 0;
    contentEl.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }
/* ---------------------------------------------------------------------
     Gallery carousel (click / arrows / dots)
     --------------------------------------------------------------------- */
  contentEl.addEventListener("click", (e) => {
    const figure = e.target.closest(".project-figure");
    if (!figure) return;

    const arrow = e.target.closest(".gallery-arrow");
    const dot = e.target.closest("[data-goto]");
    const frame = figure.querySelector(".project-figure-frame");
    const imgs = figure.querySelectorAll(".project-figure-frame img");
    const dots = figure.querySelectorAll(".gallery-dots button");
    const t = SITE.content[state.lang];
    const p = t.curatorial.projects.find((x) => x.slug === state.slug);
    if (!p || !p.images) return;

    let index = parseInt(figure.dataset.index, 10) || 0;

    if (arrow) {
      const dir = parseInt(arrow.dataset.dir, 10);
      index = (index + dir + imgs.length) % imgs.length;
    } else if (dot) {
      index = parseInt(dot.dataset.goto, 10);
    } else if (e.target.closest(".project-figure-frame")) {
      // click on the photo itself: right half = next, left half = prev
      const rect = frame.getBoundingClientRect();
      const clickedRight = (e.clientX - rect.left) > rect.width / 2;
      index = (index + (clickedRight ? 1 : -1) + imgs.length) % imgs.length;
    } else {
      return;
    }

    figure.dataset.index = index;
    imgs.forEach((img, i) => img.classList.toggle("active", i === index));
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
    figure.querySelector(".project-caption").textContent = p.images[index].caption || "";
  });
  /* ---------------------------------------------------------------------
     Events
     --------------------------------------------------------------------- */
  document.getElementById("lang-switch").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-lang]");
    if (!btn) return;
    const { view, slug } = parseHash();
    setHash(btn.dataset.lang, view, slug);
  });

  window.addEventListener("hashchange", render);

  if (!location.hash) location.hash = `#/${DEFAULT_LANG}/home`;
  render();
})();
