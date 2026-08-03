const NAV_CONFIGS = {
  photos: {
    icon: "/assets/photos/icon_web.png",
    name: "Raza Photos",
    home: "/photos/index.html",
    links: [
      ["/photos/index.html#features", "Features"],
      ["/photos/browse.html", "See it in action"],
      ["/photos/transfer.html", "Transfer"],
      ["/photos/index.html#metadata", "Metadata"],
      ["/photos/formats.html", "Formats"],
      ["/discovery.html", "Discovery"],
      ["/photos/index.html#pricing", "Pricing"],
      ["/support.html", "Support"],
    ],
    cta: { href: "https://apps.apple.com/ro/app/raza-photos/id6766848491", label: "Download Free" },
  },
  music: {
    icon: "/assets/music/icon_web.png",
    name: "Raza Music",
    home: "/music/index.html",
    links: [
      ["/music/index.html#features", "Features"],
      ["/music/browse.html", "Browsing"],
      ["/music/playing.html", "Now Playing"],
      ["/music/editing.html", "Editing"],
      ["/music/formats.html", "Formats"],
      ["/discovery.html", "Discovery"],
      ["/music/index.html#pricing", "Pricing"],
      ["/support.html", "Support"],
    ],
    cta: { href: "/music/index.html", label: "Coming Soon" },
  },
  hub: {
    icon: "/assets/icon_web.svg",
    name: "Raza Software",
    home: "/",
    links: [
      ["/photos/index.html", "Raza Photos"],
      ["/music/index.html", "Raza Music"],
      ["/support.html", "Support"],
    ],
    cta: null,
  },
  shared: {
    icon: "/assets/icon_web.svg",
    name: "Raza Software",
    home: "/",
    links: [
      ["/photos/index.html", "Raza Photos"],
      ["/music/index.html", "Raza Music"],
      ["/support.html", "Support"],
      ["/privacy.html", "Privacy"],
    ],
    cta: null,
  },
};

class RazaNav extends HTMLElement {
  connectedCallback() {
    const cfg = NAV_CONFIGS[this.getAttribute("app")] || NAV_CONFIGS.hub;
    const linksHtml = cfg.links.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join("");
    const ctaHtml = cfg.cta ? `<a href="${cfg.cta.href}" class="btn btn-primary">${cfg.cta.label}</a>` : "";

    this.innerHTML = `<nav>
      <a href="${cfg.home}" class="nav-brand">
        <img src="${cfg.icon}" alt="${cfg.name} icon" />
        <span>${cfg.name}</span>
      </a>
      <ul class="nav-links">${linksHtml}</ul>
      ${ctaHtml}
    </nav>`;
  }
}

customElements.define("raza-nav", RazaNav);
