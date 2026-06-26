class StepFlow extends HTMLElement {}

class FlowStep extends HTMLElement {
  connectedCallback() {
    const icon = this.getAttribute("icon") ?? "";
    const heading = this.getAttribute("heading") ?? "";
    const body = this.innerHTML.trim();

    this.innerHTML = `
      <span class="step-icon">${icon}</span>
      <div class="step-content">
        <strong class="step-heading">${heading}</strong>
        ${body ? `<div class="step-body">${body}</div>` : ""}
      </div>`;
  }
}

customElements.define("step-flow", StepFlow);
customElements.define("flow-step", FlowStep);
