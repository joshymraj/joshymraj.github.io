// Swap a thumbnail for a titled placeholder tile when any of its images fails to load.
const showFallback = (thumb: HTMLElement): void => {
  thumb.classList.add("is-fallback");
};

for (const thumb of document.querySelectorAll<HTMLElement>(".thumb")) {
  for (const img of thumb.querySelectorAll("img")) {
    // An image that failed before this module ran won't fire another error event.
    if (img.complete && img.naturalWidth === 0) {
      showFallback(thumb);
    } else {
      img.addEventListener("error", () => showFallback(thumb), { once: true });
    }
  }
}

const year = document.getElementById("year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}
