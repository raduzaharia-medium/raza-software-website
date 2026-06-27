class DetailItem extends HTMLElement {
  connectedCallback() {
    const heading = this.getAttribute("heading") ?? "";
    const body = this.innerHTML.trim();
    this.innerHTML = `<h4>${heading}</h4><p>${body}</p>`;
  }
}
customElements.define("detail-item", DetailItem);
