class LinkCard extends HTMLElement {
  connectedCallback() {
    const href = this.getAttribute("href") ?? "#";
    const label = this.getAttribute("label") ?? "";
    const heading = this.getAttribute("heading") ?? "";
    const description = this.getAttribute("description") ?? "";
    this.innerHTML = `<a href="${href}" class="link-card">
      <span class="label">${label}</span>
      <strong>${heading}</strong>
      <span>${description}</span>
    </a>`;
  }
}

customElements.define("link-card", LinkCard);
