class FaqItem extends HTMLElement {
  connectedCallback() {
    const question = this.getAttribute("question") ?? "";
    const answer = this.innerHTML;
    this.innerHTML = `<h4>${question}</h4><p>${answer}</p>`;
  }
}

customElements.define("faq-item", FaqItem);
