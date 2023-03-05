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
    background-image: linear-gradient(to right, var(--cover-ambience-color) 0, var(--spice-player) 280px, var(--spice-player) 100%);
    position: relative;
    z-index: 100;
}
.main-nowPlayingBar-container:before {
    background-image: linear-gradient(to right, var(--cover-ambience-color-before) 0, var(--spice-player) 280px, var(--spice-player) 100%);
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
`;
document.head.appendChild(ca_style);

let vibrantScript = document.createElement('script');
vibrantScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/node-vibrant/dist/vibrant.min.js');
document.head.appendChild(vibrantScript);

// https://www.npmjs.com/package/color-blend v4.0.0
function n(n,r,t){return{r:255*t(n.r/255,r.r/255),g:255*t(n.g/255,r.g/255),b:255*t(n.b/255,r.b/255)}}function r(n,r){return r}function t(n,r){return n*r}function u(n,r){return n+r-n*r}function i(n,r){return a(r,n)}function o(n,r){return Math.min(n,r)}function e(n,r){return Math.min(Math.max(n,r),1)}function c(n,r){return 0===n?0:1===r?1:Math.min(1,n/(1-r))}function f(n,r){return 1===n?1:0===r?0:1-Math.min(1,(1-n)/r)}function a(n,r){return r<=.5?t(n,2*r):u(n,2*r-1)}function b(n,r){return r<=.5?n-(1-2*r)*n*(1-n):n+(2*r-1)*((n<=.25?((16*n-12)*n+4)*n:Math.sqrt(n))-n)}function g(n,r){return Math.abs(n-r)}function h(n,r){return n+r-2*n*r}function M(n,r,t){return Math.min(Math.max(n||0,r),t)}function m(n){return{r:M(n.r,0,255),g:M(n.g,0,255),b:M(n.b,0,255),a:M(n.a,0,1)}}function d(n){return{r:255*n.r,g:255*n.g,b:255*n.b,a:n.a}}function p(n){return{r:n.r/255,g:n.g/255,b:n.b/255,a:n.a}}function v(n,r){void 0===r&&(r=0);var t=Math.pow(10,r);return{r:Math.round(n.r*t)/t,g:Math.round(n.g*t)/t,b:Math.round(n.b*t)/t,a:n.a}}function x(n,r,t,u,o,i){return(1-r/t)*u+r/t*Math.round((1-n)*o+n*i)}function O(n,r,t,u,o){void 0===o&&(o={unitInput:!1,unitOutput:!1,roundOutput:!0}),o.unitInput&&(n=d(n),r=d(r)),n=m(n);var i=(r=m(r)).a+n.a-r.a*n.a,e=t(n,r,u),c=m({r:x(n.a,r.a,i,n.r,r.r,e.r),g:x(n.a,r.a,i,n.g,r.g,e.g),b:x(n.a,r.a,i,n.b,r.b,e.b),a:i});return c=o.unitOutput?p(c):o.roundOutput?v(c):function(n){return v(n,9)}(c),c}function s(n,r,t){return d(t(p(n),p(r)))}function I(n){return.3*n.r+.59*n.g+.11*n.b}function q(n,r){var t=r-I(n);return function(n){function r(n){return u+(n-u)*u/(u-c)}function t(n){return u+(n-u)*(1-u)/(a-u)}var u=I(n),o=n.r,i=n.g,e=n.b,c=Math.min(o,i,e),a=Math.max(o,i,e);return c<0&&(o=r(o),i=r(i),e=r(e)),a>1&&(o=t(o),i=t(i),e=t(e)),{r:o,g:i,b:e}}({r:n.r+t,g:n.g+t,b:n.b+t})}function w(n){return Math.max(n.r,n.g,n.b)-Math.min(n.r,n.g,n.b)}function j(n,r){var t=["r","g","b"].sort(function(r,t){return n[r]-n[t]}),u=t[0],o=t[1],i=t[2],e={r:n.r,g:n.g,b:n.b};return e[i]>e[u]?(e[o]=(e[o]-e[u])*r/(e[i]-e[u]),e[i]=r):e[o]=e[i]=0,e[u]=0,e}function k(n,r){return q(j(r,w(n)),I(n))}function l(n,r){return q(j(n,w(r)),I(n))}function y(n,r){return q(r,I(n))}function z(n,r){return q(n,I(r))}function normal(t,u){return O(t,u,n,r)}function multiply(r,u){return O(r,u,n,t)}function screen(r,t){return O(r,t,n,u)}function overlay(r,t){return O(r,t,n,i)}function darken(r,t){return O(r,t,n,o)}function lighten(r,t){return O(r,t,n,e)}function colorDodge(r,t){return O(r,t,n,c)}function colorBurn(r,t){return O(r,t,n,f)}function hardLight(r,t){return O(r,t,n,a)}function softLight(r,t){return O(r,t,n,b)}function difference(r,t){return O(r,t,n,g)}function exclusion(r,t){return O(r,t,n,h)}function hue(n,r){return O(n,r,s,k)}function saturation(n,r){return O(n,r,s,l)}function color(n,r){return O(n,r,s,y)}function luminosity(n,r){return O(n,r,s,z)};

var beforeElement = false;
async function setGradient(player) {
    let style = document.querySelector('.main-nowPlayingBar-container')?.style;
    let rgb = ((await Vibrant.from(`https://i.scdn.co/image/${player.data.track.metadata.image_large_url.split(':')[2]}`).getPalette()).Vibrant.rgb || [255, 255, 255]);
    let colorObject = normal({ r: 33, g: 33, b: 33, a: 1 }, { r: rgb[0], g: rgb[1], b: rgb[2], a: 0.411 });
    let color = `rgb(${colorObject.r}, ${colorObject.g}, ${colorObject.b})`;
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
