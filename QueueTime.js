const QUEUE_TEXT_ELEMENT = "#main > div > div.Root__top-container > div.Root__main-view > div.main-view-container > div.os-host.os-host-foreign.os-theme-spotify.os-host-resize-disabled.os-host-scrollbar-horizontal-hidden.main-view-container__scroll-node.os-host-transition.os-host-overflow.os-host-overflow-y > div.os-padding > div > div > div.main-view-container__scroll-node-child > main > section > section > h1";


let qt_style = document.createElement("style");
qt_style.innerHTML = `
${QUEUE_TEXT_ELEMENT} {
    position: relative;
}
${QUEUE_TEXT_ELEMENT}::after {
    content: var(--queue-remaining);
    color: gray;
    font-size: 1rem;
    position: absolute;
    bottom: 0;
    right: 0;
}`;
document.head.appendChild(qt_style);

let momentScript = document.createElement("script");
momentScript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js");
momentScript.setAttribute("integrity", "sha512-+H4iLjY3JsKiF2V6N366in5IQHj2uEsGV7Pp/GRcm0fn76aPAk5V8xB6n8fQhhSonTqTXs/klFz4D0GIn6Br9g==");
momentScript.setAttribute("crossorigin", "anonymous");
momentScript.setAttribute("referrerpolicy", "no-referrer");
document.head.appendChild(momentScript);

setInterval(function () {
    let totalTime = 0;
    Spicetify.Queue.nextTracks.some(track => {
        if (isNaN(Number(track.contextTrack.metadata.duration))) {
            return true;
        }
        totalTime += Number(track.contextTrack.metadata.duration);
    });
	if (document.querySelector(QUEUE_TEXT_ELEMENT).textContent == "Queue") {
        document.querySelector(QUEUE_TEXT_ELEMENT).style.setProperty("--queue-remaining", `"${moment.utc(totalTime + Spicetify.Player.getDuration() - Spicetify.Player.getProgress()).format("HH:mm:ss")} Remaining"`);
    }
}, 1000);
