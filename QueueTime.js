let qt_style = document.createElement( "style" );
qt_style.innerHTML = `
h1.Type__TypeElement-goli3j-0.dnNHjd.DG9CsoFIptJhAneKoo_F {
    position: relative;
}
h1.Type__TypeElement-goli3j-0.dnNHjd.DG9CsoFIptJhAneKoo_F::after {
    content: var(--queue-remaining);
    color: gray;
    font-size: 1rem;
    position: absolute;
    bottom: 0;
    right: 0;
}
`;
document.head.appendChild( qt_style );

let momentScript = document.createElement( "script" );
momentScript.setAttribute( 'src', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js' );
momentScript.setAttribute( 'integrity', 'sha512-+H4iLjY3JsKiF2V6N366in5IQHj2uEsGV7Pp/GRcm0fn76aPAk5V8xB6n8fQhhSonTqTXs/klFz4D0GIn6Br9g==' );
momentScript.setAttribute( 'crossorigin', 'anonymous' );
momentScript.setAttribute( 'referrerpolicy', 'no-referrer' );
document.head.appendChild( momentScript );

setInterval( function () {
    let totalTime = 0;
    Spicetify.Queue?.nextTracks.some( t => {
        if ( isNaN( Number( t.contextTrack.metadata.duration ) ) ) return true;
        totalTime += Number( t.contextTrack.metadata.duration );
    } );
    document.querySelector( `h1.Type__TypeElement-goli3j-0.dnNHjd.DG9CsoFIptJhAneKoo_F` )?.style.setProperty( '--queue-remaining', `'${moment.utc( totalTime + Spicetify.Player.getDuration() - Spicetify.Player.getProgress() ).format( 'HH:mm:ss' )} Remaining'` );
}, 1000 );
