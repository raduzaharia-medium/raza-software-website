class PlatformScreenshot extends HTMLElement {
  connectedCallback() {
    const mac = this.getAttribute("mac") ?? "";
    const ipad = this.getAttribute("ipad") ?? "";
    const iphone = this.getAttribute("iphone") ?? "";
    const alt = this.getAttribute("alt") ?? "";

    this.innerHTML = `<img class="platform-img" src="${mac}" data-mac="${mac}" data-ipad="${ipad}" data-iphone="${iphone}" alt="${alt}">
      <div class="device-picker">
        <button class="device-btn active" data-platform="mac">Mac</button>
        <button class="device-btn" data-platform="ipad">iPad</button>
        <button class="device-btn" data-platform="iphone">iPhone</button>
      </div>`;

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
