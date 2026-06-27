class FeatureImage extends HTMLElement {
  connectedCallback() {
    const src = this.getAttribute("src") ?? "";
    const alt = this.getAttribute("alt") ?? "";
    this.innerHTML = `<img src="${src}" alt="${alt}" />`;
  }
}
customElements.define("feature-image", FeatureImage);
