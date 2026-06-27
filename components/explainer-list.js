class ExplainerList extends HTMLElement {
  connectedCallback() {
    const heading = this.getAttribute("heading") ?? "";
    const description = this.getAttribute("description") ?? "";
    const itemsHTML = this.innerHTML.trim();

    this.innerHTML = `
      <div class="section">
        ${heading ? `<h2>${heading}</h2>` : ""}
        ${description ? `<p>${description}</p>` : ""}
        <ul>${itemsHTML}</ul>
      </div>`;
  }
}

customElements.define("explainer-list", ExplainerList);
