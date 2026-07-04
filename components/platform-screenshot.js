const PLATFORM_LABELS = { mac: "Mac", ipad: "iPad", iphone: "iPhone" };

class PlatformScreenshot extends HTMLElement {
  connectedCallback() {
    const sources = { mac: this.getAttribute("mac"), ipad: this.getAttribute("ipad"), iphone: this.getAttribute("iphone") };
    const available = Object.keys(sources).filter((platform) => sources[platform]);
    const alt = this.getAttribute("alt") ?? "";

    const dataAttrs = available.map((platform) => `data-${platform}="${sources[platform]}"`).join(" ");
    const buttons = available
      .map((platform, i) => `<button class="device-btn${i === 0 ? " active" : ""}" data-platform="${platform}">${PLATFORM_LABELS[platform]}</button>`)
      .join("");

    this.innerHTML = `<img class="platform-img" src="${sources[available[0]]}" ${dataAttrs} alt="${alt}">
      ${available.length > 1 ? `<div class="device-picker">${buttons}</div>` : ""}`;

    const img = this.querySelector(".platform-img");
    this.querySelectorAll(".device-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const platform = btn.dataset.platform;
        if (img.dataset[platform]) img.src = img.dataset[platform];
        this.querySelectorAll(".device-btn").forEach((b) => {
          b.classList.toggle("active", b === btn);
        });
      });
    });
  }
}

customElements.define("platform-screenshot", PlatformScreenshot);
