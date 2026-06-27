class HdrExplainer extends HTMLElement {
  connectedCallback() {
    const heading = this.getAttribute("heading") ?? "";
    const bodyHTML = this.innerHTML.trim();
    this.innerHTML = `
      <div class="hdr-explainer-text">
        ${heading ? `<h3>${heading}</h3>` : ""}
        ${bodyHTML}
      </div>
      <div class="hdr-explainer-diagram">
        <div class="hdr-layer hdr-layer-sdr">
          <span class="hdr-layer-label">SDR image</span>
          <span class="hdr-layer-sub">Looks correct on every screen</span>
        </div>
        <div class="hdr-layer-plus">+</div>
        <div class="hdr-layer hdr-layer-map">
          <span class="hdr-layer-label">Gain map</span>
          <span class="hdr-layer-sub">Hidden brightness instructions</span>
        </div>
        <div class="hdr-layer-equals">=</div>
        <div class="hdr-layer hdr-layer-result">
          <span class="hdr-layer-label">Full HDR</span>
          <span class="hdr-layer-sub">On capable displays</span>
        </div>
      </div>
    `;
  }
}

customElements.define("hdr-explainer", HdrExplainer);
