class DetailList extends HTMLElement {
  connectedCallback() {
    const label = this.getAttribute("label") ?? "";
    const card = this.hasAttribute("card");
    const itemsHTML = this.innerHTML.trim();
    const wrapClass = card ? "detail-card" : "detail-group";
    this.innerHTML = `
      ${label ? `<h3 class="detail-label">${label}</h3>` : ""}
      <div class="${wrapClass}">${itemsHTML}</div>`;
  }
}
customElements.define("detail-list", DetailList);
