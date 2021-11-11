function muterReceiver(request, sender) {
  browser.tabs.update(sender.tab.id, { muted: !!request });
}
browser.runtime.onMessage.addListener(muterReceiver);
