class StatementBox extends HTMLElement {
  connectedCallback() {
    const heading = this.getAttribute("heading");
    const body = this.innerHTML.trim();

    const parts = [];
    if (heading) parts.push(`<strong class="statement-heading">${heading}</strong>`);
    if (body) parts.push(`<div class="statement-body">${body}</div>`);

    this.innerHTML = parts.join("");
  }
}

customElements.define("statement-box", StatementBox);
