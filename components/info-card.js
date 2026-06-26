class InfoCard extends HTMLElement {
  connectedCallback() {
    const icon = this.getAttribute("icon");
    const label = this.getAttribute("label");
    const heading = this.getAttribute("heading");
    const description = this.getAttribute("description");
    const badge = this.getAttribute("badge");
    const href = this.getAttribute("href");

    // Capture light-DOM children as body content before rewriting
    const bodyHTML = this.innerHTML.trim();

    const parts = [];
    if (icon) parts.push(`<span class="card-icon">${icon}</span>`);
    if (label) parts.push(`<span class="card-label">${label}</span>`);
    if (heading) parts.push(`<strong class="card-heading">${heading}</strong>`);
    if (description) parts.push(`<p class="card-description">${description}</p>`);
    else if (bodyHTML) parts.push(`<div class="card-body">${bodyHTML}</div>`);
    if (badge) parts.push(`<span class="card-badge">${badge}</span>`);

    if (href) {
      this.innerHTML = `<a class="card-link" href="${href}">${parts.join("")}</a>`;
      this.setAttribute("role", "link");
    } else {
      this.innerHTML = parts.join("");
    }
  }
}

customElements.define("info-card", InfoCard);
