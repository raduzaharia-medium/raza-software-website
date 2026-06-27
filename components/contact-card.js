class ContactCard extends HTMLElement {
  connectedCallback() {
    const href = this.getAttribute("href") ?? "#";
    const icon = this.getAttribute("icon") ?? "";
    const heading = this.getAttribute("heading") ?? "";
    const description = this.getAttribute("description") ?? "";

    this.innerHTML = `<a href="${href}" class="contact-card-link">
      <span class="contact-icon">${icon}</span>
      <span class="contact-info">
        <strong>${heading}</strong>
        <span>${description}</span>
      </span>
      <svg class="contact-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </a>`;
  }
}

customElements.define("contact-card", ContactCard);
