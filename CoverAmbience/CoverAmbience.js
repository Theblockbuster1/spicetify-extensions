let ca_style = document.createElement('style');
ca_style.innerHTML = `
.main-nowPlayingBar-container {
    background: linear-gradient(to right, var(--cover-color) 0, rgba(0,0,0,0) 280px, rgba(0,0,0,0) 100%);
}
.Root__now-playing-bar {
    background-color: var(--spice-player);
}
.main-nowPlayingBar-container {
    transition: background 0.5s ease;
}
`;
document.head.appendChild(ca_style);

let vibrantScript = document.createElement('script');
vibrantScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/node-vibrant/dist/vibrant.min.js');
document.head.appendChild(vibrantScript);

async function setGradient(player) {
    document.querySelector('.main-nowPlayingBar-container')?.style.setProperty('--cover-color', ((await Vibrant.from(`https://i.scdn.co/image/${player.data.track.metadata.image_large_url.split(':')[2]}`).getPalette()).Vibrant.hex || '#FFFFFF')+'69');
}


if (document.querySelector('.main-nowPlayingBar-container')) {
    setGradient(Spicetify.Player);
} else {
    const observer = new MutationObserver(() => {
        if (document.querySelector('.main-nowPlayingBar-container')) {
            setGradient(Spicetify.Player);
            observer.disconnect();
        }
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}


Spicetify.Player.addEventListener('songchange', setGradient);
