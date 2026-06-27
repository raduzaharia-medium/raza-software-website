class TradeoffBox extends HTMLElement {
  connectedCallback() {
    const heading = this.getAttribute("heading");
    const body = this.innerHTML.trim();

    const parts = [];
    if (heading) parts.push(`<strong class="tradeoff-heading">${heading}</strong>`);
    if (body) parts.push(`<div class="tradeoff-body">${body}</div>`);

    this.innerHTML = parts.join("");
  }
}

customElements.define("tradeoff-box", TradeoffBox);
