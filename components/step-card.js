class StepCards extends HTMLElement {}

class StepCard extends HTMLElement {
  connectedCallback() {
    const number = this.getAttribute("number") ?? "";
    const heading = this.getAttribute("heading") ?? "";
    const body = this.innerHTML.trim();

    this.innerHTML = `
      <div class="step-number">${number}</div>
      <strong class="step-heading">${heading}</strong>
      ${body ? `<div class="step-body">${body}</div>` : ""}
    `;
  }
}

customElements.define("step-cards", StepCards);
customElements.define("step-card", StepCard);
