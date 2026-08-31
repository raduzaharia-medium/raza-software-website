class RazaFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer>
      <div class="footer-top">
        <a href="/" class="footer-brand">
          <img src="/assets/icon_web.svg" alt="Raza Software" />
          <span>Raza Software</span>
        </a>
        <div class="footer-nav">
          <div class="footer-group">
            <span class="footer-group-label">Raza Photos</span>
            <ul>
              <li><a href="/photos/index.html">Overview</a></li>
              <li><a href="/photos/browse.html">Browsing</a></li>
              <li><a href="/photos/formats.html">Supported formats</a></li>
              <li><a href="/photos/burst.html">Burst navigation</a></li>
              <li><a href="/photos/editing.html">Editing</a></li>
              <li><a href="/photos/library-health.html">Library Health</a></li>
              <li><a href="/photos/widget.html">Widget</a></li>
              <li><a href="/photos/sharing.html">Sharing</a></li>
              <li><a href="/photos/transfer.html">Transfer</a></li>
              <li><a href="/photos/metadata-read.html">Metadata reading</a></li>
              <li><a href="/photos/metadata-write.html">Metadata writing</a></li>
            </ul>
          </div>
          <div class="footer-group">
            <span class="footer-group-label">Raza Music</span>
            <ul>
              <li><a href="/music/index.html">Overview</a></li>
              <li><a href="/music/browse.html">Browsing</a></li>
              <li><a href="/music/formats.html">Supported formats</a></li>
              <li><a href="/music/playing.html">Now Playing</a></li>
              <li><a href="/music/editing.html">Editing</a></li>
              <li><a href="/music/library-health.html">Library Health</a></li>
              <li><a href="/music/metadata-read.html">Metadata reading</a></li>
              <li><a href="/music/metadata-write.html">Metadata writing</a></li>
            </ul>
          </div>
          <div class="footer-group">
            <span class="footer-group-label">Help</span>
            <ul>
              <li><a href="/discovery.html">How discovery works</a></li>
              <li><a href="/support.html">Support</a></li>
              <li><a href="/privacy.html">Privacy Policy</a></li>
              <li><a href="/security.html">Security</a></li>
              <li><a href="/local-first.html">Local-first</a></li>
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
