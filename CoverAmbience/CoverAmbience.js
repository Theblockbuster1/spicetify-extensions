let ca_style = document.createElement('style');
ca_style.innerHTML = `
.Root__now-playing-bar {
    background-color: var(--spice-player);
}
.main-nowPlayingBar-container {
    transition: background 0.5s ease;
}
.main-nowPlayingBar-container {
    background-size: 100%;
    background-image: linear-gradient(to right, var(--cover-ambience-color) 0, var(--spice-player) 280px, var(--spice-player) 100%) !important;
    position: relative;
    z-index: 100;
}
.main-nowPlayingBar-container:before {
    background-image: linear-gradient(to right, var(--cover-ambience-color-before) 0, var(--spice-player) 280px, var(--spice-player) 100%);
    border-radius: var(--border-radius-1) !important;
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    z-index: -100;
    transition: opacity 0.6s;
    opacity: var(--cover-ambience-opacity);
}

/* Add outlines to song text/artist/genre */
.main-trackInfo-name
{
  text-shadow: -1px -1px 0 rgba(var(--spice-rgb-player), 0.5), 1px -1px 0 rgba(var(--spice-rgb-player), 0.5), -1px 1px 0 rgba(var(--spice-rgb-player), 0.5), 1px 1px 0 rgba(var(--spice-rgb-player), 0.5);
}
.main-trackInfo-artists, .main-trackInfo-genres
{
  text-shadow: -1px -1px 0 rgba(var(--spice-rgb-player), 0.4), 1px -1px 0 rgba(var(--spice-rgb-player), 0.4), -1px 1px 0 rgba(var(--spice-rgb-player), 0.4), 1px 1px 0 rgba(var(--spice-rgb-player), 0.4);
}
`;
document.head.appendChild(ca_style);

const hexToRGB = hex =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))

function RGBToHSL(rgb) {
  if (rgb.length) {
    // make r, g, and b fractions of 1
    let r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255,

    // find greatest and smallest channel values
      cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

    // calculate hue
    // no difference
    if (delta == 0)
      h = 0;
    // red is max
    else if (cmax == r)
      h = ((g - b) / delta) % 6;
    // green is max
    else if (cmax == g)
      h = (b - r) / delta + 2;
    // blue is max
    else
      h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // make negative hues positive behind 360°
    if (h < 0)
      h += 360;

    // calculate lightness
    l = (cmax + cmin) / 2;

    // calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    
    // normalize color
    s = s > 50 ? 50 : s;
    l = l > 35 ? 35 : l;
    l = l < 8 ? 8 : l;

    return "hsl(" + h + "," + s + "%," + l + "%)";

  } else {
    return "hsl(0, 0%, 50%)";
  }
}

async function fetchExtractedColors() {
    const res = await fetch(`https://api-partner.spotify.com/pathfinder/v1/query?operationName=fetchExtractedColors&variables=${encodeURIComponent(JSON.stringify({ uris: [Spicetify.Player.data.track.metadata.image_url] }))}&extensions=${encodeURIComponent(JSON.stringify({"persistedQuery":{"version":1,"sha256Hash":"d7696dd106f3c84a1f3ca37225a1de292e66a2d5aced37a66632585eeb3bbbfa"}}))}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${(await Spicetify.Platform.AuthorizationAPI._tokenProvider()).accessToken}`
        }
    })
    .then(res => res.json());
    if (!res.data.extractedColors) return [128, 128, 128];
    return hexToRGB(res.data.extractedColors[0].colorRaw.hex);
}

var beforeElement = false;
async function setGradient() {
    let style = document.querySelector('.main-nowPlayingBar-container')?.style;
    let rgb = (await fetchExtractedColors() || [128, 128, 128]);
    let color = RGBToHSL(rgb);
    if (beforeElement) {
        style.setProperty('--cover-ambience-color', color);
        style.setProperty('--cover-ambience-opacity', 0);
        beforeElement = false;
    } else {
        style.setProperty('--cover-ambience-color-before', color);
        style.setProperty('--cover-ambience-opacity', 1);
        beforeElement = true;
    }
}


if (document.querySelector('.main-nowPlayingBar-container')) {
    setGradient();
} else {
    const observer = new MutationObserver(() => {
        if (document.querySelector('.main-nowPlayingBar-container')) {
            setGradient();
            observer.disconnect();
        }
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}


Spicetify.Player.addEventListener('songchange', setGradient);