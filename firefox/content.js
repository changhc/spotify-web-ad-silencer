let widgetFound = false;
let adPlaying = false;

const initObserver = new MutationObserver(() => {
  // data-testid="now-playing-widget" is where ad elements are located.
  if (
    !widgetFound &&
    document.querySelector('[data-testid="now-playing-widget"]')
  ) {
    widgetFound = true;
    adObserver.observe(
      document.querySelector('[data-testid="now-playing-widget"]'),
      { attributeFilter: ["aria-label"] }
    );
    // initObserver has done its job so shut it down
    initObserver.disconnect();
  }
});

const adObserver = new MutationObserver((mutations) => {
  for (let mutation of mutations) {
    const currValue = mutation.target.attributes["aria-label"].value;
    if (currValue !== "Advertisement" && adPlaying) {
      browser.runtime.sendMessage(0);
      adPlaying = false;
      break;
    }
    if (currValue === "Advertisement") {
      browser.runtime.sendMessage(1);
      adPlaying = true;
      break;
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  initObserver.observe(document, { childList: true, subtree: true });
});
