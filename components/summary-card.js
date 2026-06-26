class SummaryCard extends HTMLElement {
  connectedCallback() {
    const icon = this.getAttribute("icon") ?? "";
    const heading = this.getAttribute("heading") ?? "";
    const description = this.getAttribute("description");
    this.innerHTML = `<span class="icon">${icon}</span>
      <strong>${heading}</strong>
      ${description ? `<span>${description}</span>` : ""}`;
  }
}

customElements.define("summary-card", SummaryCard);
