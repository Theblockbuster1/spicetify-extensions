let ca_style = document.createElement('style');
ca_style.innerHTML = `
.main-nowPlayingBar-container {
    position: relative;
}
.main-nowPlayingBar-container::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cover-ambience-color);
    -webkit-mask-image: linear-gradient(to right, #000f 0, #0000 280px, #0000 100%);
}
.main-nowPlayingBar-container::before {
    transition: background 0.5s ease;
}
`;
document.head.appendChild(ca_style);

let vibrantScript = document.createElement('script');
vibrantScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/node-vibrant/dist/vibrant.min.js');
document.head.appendChild(vibrantScript);

async function setGradient(player) {
    document.querySelector('.main-nowPlayingBar-container')?.style.setProperty('--cover-ambience-color', ((await Vibrant.from(`https://i.scdn.co/image/${player.data.track.metadata.image_large_url.split(':')[2]}`).getPalette()).Vibrant.hex || '#FFFFFF')+'69');
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
