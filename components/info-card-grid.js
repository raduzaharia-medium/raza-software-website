class InfoCardGrid extends HTMLElement {
  connectedCallback() {
    const cardsHTML = this.innerHTML.trim();
    this.innerHTML = `<div class="card-grid">${cardsHTML}</div>`;
  }
}
customElements.define("info-card-grid", InfoCardGrid);
