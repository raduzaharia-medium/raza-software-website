class ConceptPair extends HTMLElement {
  connectedCallback() {
    const cardsHTML = this.innerHTML.trim();
    this.innerHTML = `<div class="pair-grid">${cardsHTML}</div>`;
  }
}
customElements.define("concept-pair", ConceptPair);
