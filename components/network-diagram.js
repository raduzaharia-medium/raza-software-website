class NetworkDiagram extends HTMLElement {
  connectedCallback() {
    const heading = this.getAttribute("heading");
    const rowsHTML = this.innerHTML.trim();
    this.innerHTML = `
      ${heading ? `<h3 class="network-diagram-heading">${heading}</h3>` : ""}
      ${rowsHTML}
    `;
  }
}

class NetworkRow extends HTMLElement {
  connectedCallback() {
    const icon = this.getAttribute("icon") ?? "";
    const label = this.getAttribute("label") ?? "";
    const description = this.getAttribute("description") ?? "";
    const status = this.getAttribute("status") ?? "";
    const statusVariant = this.getAttribute("status-variant") ?? "";

    this.innerHTML = `
      <span class="network-device">${icon}</span>
      <span class="network-info">
        <strong>${label}</strong>
        <span>${description}</span>
      </span>
      <span class="network-status ${statusVariant ? `status-${statusVariant}` : ""}">${status}</span>
    `;
  }
}

customElements.define("network-diagram", NetworkDiagram);
customElements.define("network-row", NetworkRow);
