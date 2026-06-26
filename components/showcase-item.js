class ShowcaseItem extends HTMLElement {
  connectedCallback() {
    const label = this.getAttribute("label") ?? "";
    const heading = this.getAttribute("heading") ?? "";
    const mac = this.getAttribute("mac");
    const ipad = this.getAttribute("ipad");
    const iphone = this.getAttribute("iphone");
    const image = this.getAttribute("image");
    const alt = this.getAttribute("alt") ?? "";
    const bodyHTML = this.innerHTML.trim();

    let imageHTML = "";
    if (mac || ipad || iphone) {
      imageHTML = `<platform-screenshot${mac ? ` mac="${mac}"` : ""}${ipad ? ` ipad="${ipad}"` : ""}${iphone ? ` iphone="${iphone}"` : ""} alt="${alt}"></platform-screenshot>`;
    } else if (image) {
      imageHTML = `<img src="${image}" alt="${alt}">`;
    }

    this.innerHTML = `
      <div class="showcase-text">
        ${label ? `<div class="section-label">${label}</div>` : ""}
        ${heading ? `<h3>${heading}</h3>` : ""}
        <div class="showcase-body">${bodyHTML}</div>
      </div>
      <div class="showcase-image">${imageHTML}</div>`;
  }
}

customElements.define("showcase-item", ShowcaseItem);
