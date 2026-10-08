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
              <li><a href="/photos/whats-new.html">What's new</a></li>
              <li><a href="/photos/browse.html">Browsing</a></li>
              <li><a href="/photos/formats.html">Supported formats</a></li>
              <li><a href="/photos/burst.html">Burst navigation</a></li>
              <li><a href="/photos/editing.html">Editing</a></li>
              <li><a href="/photos/library-health.html">Library Health</a></li>
              <li><a href="/photos/widget.html">Widget</a></li>
              <li><a href="/photos/transfer.html">Transfer</a></li>
              <li><a href="/photos/metadata-read.html">Metadata reading</a></li>
              <li><a href="/photos/metadata-write.html">Metadata writing</a></li>
              <li><a href="/photos/leaving-icloud.html">Leaving iCloud</a></li>
              <li><a href="/photos/iphone-without-icloud.html">iPhone without iCloud</a></li>
              <li><a href="/photos/cancel-icloud-storage.html">Cancel iCloud storage</a></li>
              <li><a href="/photos/vs-icloud-photos.html">Raza Photos vs iCloud Photos</a></li>
            </ul>
          </div>
          <div class="footer-group">
            <span class="footer-group-label">Raza Songs</span>
            <ul>
              <li><a href="/music/index.html">Overview</a></li>
              <li><a href="/music/whats-new.html">What's new</a></li>
              <li><a href="/music/browse.html">Browsing</a></li>
              <li><a href="/music/formats.html">Supported formats</a></li>
              <li><a href="/music/playing.html">Now Playing</a></li>
              <li><a href="/music/editing.html">Editing</a></li>
              <li><a href="/music/library-health.html">Library Health</a></li>
              <li><a href="/music/metadata-read.html">Metadata reading</a></li>
              <li><a href="/music/metadata-write.html">Metadata writing</a></li>
              <li><a href="/music/ripping-cds.html">Ripping CDs</a></li>
              <li><a href="/music/iphone-without-subscription.html">Play your own music</a></li>
              <li><a href="/music/play-onedrive-music-on-iphone.html">OneDrive music on iPhone</a></li>
              <li><a href="/music/vs-apple-music.html">Raza Songs vs Apple Music</a></li>
            </ul>
          </div>
          <div class="footer-group">
            <span class="footer-group-label">Help &amp; guides</span>
            <ul>
              <li><a href="/getting-started.html">Getting started</a></li>
              <li><a href="/faq.html">FAQ</a></li>
              <li><a href="/iphone-cant-find-mac.html">iPhone can't find your Mac</a></li>
              <li><a href="/backup-your-library.html">Back up your library</a></li>
              <li><a href="/finder-sync-vs-streaming.html">Sync vs streaming</a></li>
              <li><a href="/verify-privacy.html">Verify our privacy claims</a></li>
              <li><a href="/discovery.html">How discovery works</a></li>
              <li><a href="/sharing.html">Library sharing</a></li>
              <li><a href="/remote-access.html">Remote access</a></li>
              <li><a href="/support.html">Support</a></li>
              <li><a href="/privacy.html">Privacy Policy</a></li>
              <li><a href="/security.html">Security</a></li>
              <li><a href="/local-first.html">Local-first</a></li>
              <li><a href="/who-we-are.html">Who we are</a></li>
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
