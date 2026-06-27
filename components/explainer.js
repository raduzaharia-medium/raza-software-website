class Explainer extends HTMLElement {
  connectedCallback() {
    const heading = this.getAttribute("heading") ?? "";
    const description = this.getAttribute("description") ?? "";

    this.innerHTML = `
      <div class="section">
        ${heading ? `<h2>${heading}</h2>` : ""}
        ${description ? `<p>${description}</p>` : ""}
      </div>`;
  }
}

customElements.define("page-explainer", Explainer);
