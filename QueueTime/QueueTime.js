let qt_style = document.createElement( "style" );
qt_style.innerHTML = `
.queue-queuePage-header {
    position: relative;
}
.queue-queuePage-header::after {
    content: var(--queue-remaining);
    color: var(--spice-subtext);
    font-size: 1rem;
    position: absolute;
    bottom: 0;
    right: 0;
}
.queue-panel .queue-queuePage-header::after {
    top: 3px;
}
`;
document.head.appendChild( qt_style );

let momentScript = document.createElement( "script" );
momentScript.setAttribute( 'src', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js' );
momentScript.setAttribute( 'integrity', 'sha512-+H4iLjY3JsKiF2V6N366in5IQHj2uEsGV7Pp/GRcm0fn76aPAk5V8xB6n8fQhhSonTqTXs/klFz4D0GIn6Br9g==' );
momentScript.setAttribute( 'crossorigin', 'anonymous' );
momentScript.setAttribute( 'referrerpolicy', 'no-referrer' );
document.head.appendChild( momentScript );

setInterval( () => {
	const totalTime = Spicetify.Queue?.nextTracks.reduce( ( acc, cur ) => acc + ( Number( cur.contextTrack.metadata.duration ) || 0 ), 0 );
	document.querySelectorAll( '.queue-queuePage-header' )?.forEach(e => e.style.setProperty( '--queue-remaining', `'${moment.utc( totalTime + Spicetify.Player.getDuration() - Spicetify.Player.getProgress() ).format( 'HH:mm:ss' )} Remaining'` ) );
}, 1000 );
