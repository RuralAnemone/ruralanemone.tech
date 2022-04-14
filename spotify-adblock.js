// ==UserScript==
// @name         Help Skip Ads on Spotify
// @version      1.0
// @namespace    http://tampermonkey.net/
// @description  In conjunction with uBlock Origin, which can block ads on Spotify but stops the music, this essentially hits play to continue uninterrupted.
// @match        https://*.spotify.com/*
// @grant        none
// ==/UserScript==

setInterval(() => {
    var nowPlayingLink = document.querySelector(".now-playing a");
    var theresAnAd = nowPlayingLink && nowPlayingLink.hostname !== location.hostname;
    // The play button is actually shown as a 'Pause' button because it gets confused when the ad is blocked.
    var playPauseButton = document.querySelector("button[title='Play'], button[title='Pause']");
    if (theresAnAd) {
        playPauseButton.click();
        // It pauses on the next song, so... delay and play! (This may be a race condition.)
        setTimeout(() => {
            // In this case it should be correctly displayed as a Play button, and we definitely don't want to pause.
            var playButton = document.querySelector("button[title='Play']");
            playButton && playButton.click();
        }, 200);
    }
}, 500);