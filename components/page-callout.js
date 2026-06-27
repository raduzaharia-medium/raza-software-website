class PageCallout extends HTMLElement {
  connectedCallback() {
    const text = this.getAttribute("text") ?? "";
    const slotHTML = this.innerHTML.trim();
    this.innerHTML = `<p>${text}</p>${slotHTML}`;
  }
}

customElements.define("page-callout", PageCallout);
