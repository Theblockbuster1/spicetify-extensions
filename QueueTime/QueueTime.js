let qt_style = document.createElement( "style" );
qt_style.innerHTML = `
.queue-queuePage-header,
#queue-panel .NWVZ_rxlezZ8xTHlMg4Y:first-child .LFdMliaHVgrpBcqNKHU3,
.vLZJk3f3zoMmc3u9QMrc .LIaQPESoX4ijscRRn3lz:first-of-type {
    position: relative;
}
.queue-queuePage-header::after,
#queue-panel .NWVZ_rxlezZ8xTHlMg4Y:first-child .LFdMliaHVgrpBcqNKHU3::after,
.vLZJk3f3zoMmc3u9QMrc .LIaQPESoX4ijscRRn3lz:first-of-type::after {
    content: var(--queue-remaining);
    color: var(--spice-subtext);
    font-size: 1rem;
    position: absolute;
    bottom: 0;
    right: 0;
    font-weight: initial;
}
/* for queue panel only: */
.queue-panel .queue-queuePage-header::after,
#queue-panel .NWVZ_rxlezZ8xTHlMg4Y:first-child .LFdMliaHVgrpBcqNKHU3::after {
    top: 4.5px;
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
	const totalTime = Spicetify.Queue?.nextTracks.slice( 0 ).reduce( ( acc, cur, _, arr ) => {
		if ( isNaN( Number( cur.contextTrack.metadata.duration ) ) ) arr.splice(1);
		return acc + ( Number( cur.contextTrack.metadata.duration ) || 0 )
	}, 0 ) || 0;
	document.querySelectorAll( '.queue-queuePage-header, #queue-panel .NWVZ_rxlezZ8xTHlMg4Y:first-child .LFdMliaHVgrpBcqNKHU3, .vLZJk3f3zoMmc3u9QMrc .LIaQPESoX4ijscRRn3lz:first-of-type' )?.forEach(e => e.style.setProperty( '--queue-remaining', `'${moment.utc( totalTime + Spicetify.Player.getDuration() - Spicetify.Player.getProgress() ).format( 'HH:mm:ss' )} Remaining'` ) );
}, 1000 );
