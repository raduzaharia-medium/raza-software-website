class Explainer extends HTMLElement {
  connectedCallback() {
    const heading = this.getAttribute("heading") ?? "";
    const description = this.getAttribute("description") ?? "";
    const subtext = this.getAttribute("subtext") ?? "";

    this.innerHTML = `
      <div class="section">
        ${heading ? `<h2>${heading}</h2>` : ""}
        ${description ? `<p>${description}</p>` : ""}
        ${subtext ? `<p>${subtext}</p>` : ""}
      </div>`;
  }
}

customElements.define("page-explainer", Explainer);
