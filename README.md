# Ad Silencer for Spotify Web
Using Spotify for free but sick of disturbing ads? This browser extension can help!
This extension mutes the Spotify web player automatically when it's playing an ad. Both Firefox and Chrome are supported.

## Install this extension
1. Clone this repo
1. * Firefox: Follow the instruction in [Mozilla's documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#installing) and import files in folder `firefox`
   * Chrome: Follow the instruction in [Chrome's documentation](https://developer.chrome.com/docs/extensions/mv3/getstarted/#manifest) and import files in folder `chrome`

## How this works
There are two scripts here:
* `content.js`: the script that is injected into the web player by the browser. This script can access DOM elements in the web player. It listens to changes in DOM and looks for the advertisement element. When an ad shows up, it signals the extension backend to mute the web player; when the ad is gone, it signals the extension again to unmute the web player.
* `background.js`: the extension backend. This part has no access to DOM of the web page, but it can manipulate browser tabs. When it receives a signal from `content.js`, it performs the desired action (mute/unmute).

## Who should use this
* You were immersed in soft piano music but suddenly a noisy Spotify ad broke the serenity and you were pissed off.
* You invited friends to you place and played your favourite songs on Spotify, but when an ad came out, everything was interrupted and you were embarrassed.
* You just dislike the lousy ads on Spotify.

If any of these describes you, I'm sure you will like this extension!
