class RazaFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer>
      <div class="footer-top">
        <div class="footer-brand">
          <img src="assets/icon_web.png" alt="Raza Photos" />
          <span>Raza Photos</span>
        </div>
        <div class="footer-nav">
          <div class="footer-group">
            <span class="footer-group-label">Features</span>
            <ul>
              <li><a href="browse.html">Browsing</a></li>
              <li><a href="formats.html">Supported formats</a></li>
              <li><a href="burst.html">Burst navigation</a></li>
              <li><a href="editing.html">Editing</a></li>
              <li><a href="sharing.html">Sharing</a></li>
              <li><a href="transfer.html">Transfer</a></li>
            </ul>
          </div>
          <div class="footer-group">
            <span class="footer-group-label">How it works</span>
            <ul>
              <li><a href="discovery.html">How discovery works</a></li>
              <li><a href="local-first.html">Local-first</a></li>
              <li><a href="security.html">Security</a></li>
              <li><a href="metadata-read.html">Metadata reading</a></li>
              <li><a href="metadata-write.html">Metadata writing</a></li>
            </ul>
          </div>
          <div class="footer-group">
            <span class="footer-group-label">Help</span>
            <ul>
              <li><a href="support.html">Support</a></li>
              <li><a href="privacy.html">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-copy">&copy; 2026 Raza Software. Built in the EU.</span>
        <p class="footer-note">This website uses no cookies and collects no data from visitors.</p>
      </div>
    </footer>`;
  }
}

customElements.define("raza-footer", RazaFooter);
