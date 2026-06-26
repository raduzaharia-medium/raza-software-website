class CalloutBox extends HTMLElement {
  connectedCallback() {
    const heading = this.getAttribute("heading");
    const body = this.innerHTML.trim();

    const parts = [];
    if (heading) parts.push(`<strong class="callout-heading">${heading}</strong>`);
    if (body) parts.push(`<div class="callout-body">${body}</div>`);

    this.innerHTML = parts.join("");
  }
}

customElements.define("callout-box", CalloutBox);
