class HeroSection extends HTMLElement {
  connectedCallback() {
    const eyebrow = this.getAttribute("eyebrow") ?? "";
    const heading = this.getAttribute("heading") ?? "";
    const description = this.getAttribute("description") ?? "";

    this.innerHTML = `
      <div class="hero-page">
        <div class="hero-inner">
          ${eyebrow ? `<span class="hero-eyebrow">${eyebrow}</span>` : ""}
          ${heading ? `<h1>${heading}</h1>` : ""}
          ${description ? `<p>${description}</p>` : ""}
        </div>
      </div>`;
  }
}

customElements.define("hero-section", HeroSection);
