function muterReceiver(request, sender) {
  chrome.tabs.update(sender.tab.id, { muted: !!request });
}
chrome.runtime.onMessage.addListener(muterReceiver);
