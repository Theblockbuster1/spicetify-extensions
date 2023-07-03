let ca_style = document.createElement('style');
ca_style.innerHTML = `
:root {
  --cover-ambience-background: var(--spice-player);
}
.Root__now-playing-bar.LibraryX {
  --cover-ambience-background: var(--spice-sidebar);
}
.LibraryX .main-nowPlayingBar-container, .LibraryX .main-nowPlayingBar-container:before {
    border-radius: 8px;
}

.main-nowPlayingBar-container {
    transition: background 0.5s ease;
    background-size: 100%;
    --bg-img: linear-gradient(to right, var(--cover-ambience-color) 0, var(--cover-ambience-background) 280px, var(--cover-ambience-background) 100%);
    --bg-img-before: linear-gradient(to right, var(--cover-ambience-color-before) 0, var(--cover-ambience-background) 280px, var(--cover-ambience-background) 100%);
    background-image: var(--bg-img) !important;
    position: relative;
    z-index: 100;
    --cover-ambience-border-opacity: ${localStorage.CoverAmbienceBorderOpacity || 0.5};
    --cover-ambience-border-opacity-small: ${((localStorage.CoverAmbienceBorderOpacity || 0.5) * 80) / 100};
}
.main-nowPlayingBar-container:before {
    background-image: var(--bg-img-before);
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
.Root__now-playing-bar .main-trackInfo-name
{
  text-shadow: -1px -1px 0 rgba(var(--spice-rgb-player), var(--cover-ambience-border-opacity)), 1px -1px 0 rgba(var(--spice-rgb-player), var(--cover-ambience-border-opacity)), -1px 1px 0 rgba(var(--spice-rgb-player), var(--cover-ambience-border-opacity)), 1px 1px 0 rgba(var(--spice-rgb-player), var(--cover-ambience-border-opacity));
}
.Root__now-playing-bar .main-trackInfo-artists, .Root__now-playing-bar .main-trackInfo-genres
{
  text-shadow: -1px -1px 0 rgba(var(--spice-rgb-player), var(--cover-ambience-border-opacity-small)), 1px -1px 0 rgba(var(--spice-rgb-player), var(--cover-ambience-border-opacity-small)), -1px 1px 0 rgba(var(--spice-rgb-player), var(--cover-ambience-border-opacity-small)), 1px 1px 0 rgba(var(--spice-rgb-player), var(--cover-ambience-border-opacity-small));
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

LibraryX = false; // 'false' because class is not on by default
async function checkBackgroundColor() {
  let LibraryXCheck = Spicetify.RemoteConfigResolver.value.localConfiguration.values.get('enableYLXSidebar') || true;
  if (LibraryX != LibraryXCheck) {
    LibraryX = LibraryXCheck;
    let rootClasses = document.querySelector('.Root__now-playing-bar')?.classList;
    if (LibraryXCheck) rootClasses.add('LibraryX');
    else rootClasses.remove('LibraryX');
  }
}

var beforeElement = false;
async function setGradient() {
    checkBackgroundColor();
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

function initiate() {
  setGradient();
  Spicetify.Player.addEventListener('songchange', setGradient);
  setInterval(checkBackgroundColor, 5000);

  window.updateCABorderOpacity = function(value) {
    let style = document.querySelector('.main-nowPlayingBar-container')?.style;
    style.setProperty('--cover-ambience-border-opacity', value / 100);
    style.setProperty('--cover-ambience-border-opacity-small', ((value / 100) * 80) / 100);

    localStorage.CoverAmbienceBorderOpacity = value / 100;
  }

  const info = document.querySelector("div.main-nowPlayingWidget-trackInfo.main-trackInfo-container");

  var contextMenu = 0;

  info.addEventListener('contextmenu', () => { // check if the context menu was clicked within the track info container
    contextMenu = Date.now();
  })

  let borderOpacityMenuItem = new Spicetify.ContextMenu.Item(
    "Edit Border Opacity",
    () => {
      Spicetify.PopupModal.display({
        title: 'Border Opacity %',
        content: `<style>
          #coverAmbienceBorderRange {
            width: calc(100% - 78px);
            accent-color: var(--spice-button-active);
          }
          #coverAmbienceBorderNumber {
            width: 69px;
            padding: 11px;
            border-radius: 16px;
          }
          #coverAmbienceBorderNumber::-webkit-inner-spin-button {
            -webkit-appearance: auto;
          }
          .GenericModal__overlay {
            background: none;
          }
          .main-embedWidgetGenerator-container {
            box-shadow: 0 4px 13px rgb(var(--spice-rgb-shadow));
          }
          .x-searchInput-searchInputInput {
            background-color: var(--spice-main-elevated);
            border: 0;
            border-radius: 500px;
            color: var(--spice-text)!important;
            height: 48px;
            padding: 6px 36px;
            text-overflow: ellipsis;
            width: 100%
          }
          .x-searchInput-searchInputInput:hover {
            background-color: var(--spice-highlight-elevated);
            -webkit-box-shadow: 0 0 0 1px rgba(var(--spice-rgb-selected-row),.2);
            box-shadow: 0 0 0 1px rgba(var(--spice-rgb-selected-row),.2);
            outline: none
          }
          .x-searchInput-searchInputInput:focus {
            -webkit-box-shadow: 0 0 0 2px var(--spice-text);
            box-shadow: 0 0 0 2px var(--spice-text);
            outline: none
          }
        </style>
        <input id="coverAmbienceBorderRange" type="range" min="0" max="100" step="0.5" value="${(localStorage.CoverAmbienceBorderOpacity || 0.5) * 100}" oninput="this.nextElementSibling.value = this.value; updateCABorderOpacity(this.value)">
        <input id="coverAmbienceBorderNumber" type="number" class="Type__TypeElement-sc-goli3j-0 TypeElement-mesto-type x-searchInput-searchInputInput" maxlength="5" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="50" data-testid="search-input" data-encore-id="type" min="0" max="100" step="0.5" value="${(localStorage.CoverAmbienceBorderOpacity || 0.5) * 100}" oninput="this.previousElementSibling.value=this.value; updateCABorderOpacity(this.value)">`,
        isLarge: true
      });
    },
    () => {
      return Date.now() - contextMenu <= 150;
    },
    'edit',
    false,
  );
  
  borderOpacityMenuItem.register();
}

if (document.querySelector('.main-nowPlayingBar-container')) {
  initiate();
} else {
    var waiting = true;
    const observer = new MutationObserver(() => {
        if (waiting) {
          if (document.querySelector('.main-nowPlayingBar-container')) {
              waiting = false;
              initiate();
          }
        } else {
          let playingBar = document.querySelector('.main-nowPlayingBar-container');
          if (document.querySelector('.BeautifulLyricsPage.Cinema')) {
              playingBar.style.setProperty("--bg-img", "unset");
              playingBar.style.setProperty("--bg-img-before", "unset");
          } else {
              playingBar.style.removeProperty("--bg-img");
              playingBar.style.removeProperty("--bg-img-before");
          }
        }
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}