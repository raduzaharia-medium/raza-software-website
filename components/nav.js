class RazaNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<nav>
      <a href="index.html" class="nav-brand">
        <img src="assets/icon_web.png" alt="Raza Photos icon" />
        <span>Raza Photos</span>
      </a>
      <ul class="nav-links">
        <li><a href="index.html#features">Features</a></li>
        <li><a href="browse.html">See it in action</a></li>
        <li><a href="index.html#metadata">Metadata</a></li>
        <li><a href="formats.html">Formats</a></li>
        <li><a href="discovery.html">Discovery</a></li>
        <li><a href="index.html#pricing">Pricing</a></li>
        <li><a href="support.html">Support</a></li>
      </ul>
      <a href="https://apps.apple.com/ro/app/raza-photos/id6766848491" class="btn btn-primary">Download Free</a>
    </nav>`;
  }
}

customElements.define("raza-nav", RazaNav);
