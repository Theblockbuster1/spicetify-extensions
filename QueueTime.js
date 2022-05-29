let qt_style = document.createElement( "style" );
qt_style.innerHTML = `
h2.jf2HafzDEI9jn7Yo05eM.standalone-ellipsis-one-line::after {
    content: var(--queue-remaining);
    float: right;
    color: gray;
}
`;
document.head.appendChild( qt_style );

let momentScript = document.createElement( "script" );
momentScript.setAttribute( 'src', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.3/moment.min.js' );
momentScript.setAttribute( 'integrity', 'sha512-x/vqovXY/Q4b+rNjgiheBsA/vbWA3IVvsS8lkQSX1gQ4ggSJx38oI2vREZXpTzhAv6tNUaX81E7QBBzkpDQayA==' );
momentScript.setAttribute( 'crossorigin', 'anonymous' );
momentScript.setAttribute( 'referrerpolicy', 'no-referrer' );
document.head.appendChild( momentScript );

setInterval( function () {
	let totalTime = 0;
	Spicetify.Queue?.nextTracks.some( t => {
		if ( isNaN( Number( t.contextTrack.metadata.duration ) ) ) return true;
		totalTime += Number( t.contextTrack.metadata.duration );
	} );
	document.querySelector( `h2.jf2HafzDEI9jn7Yo05eM` )?.style.setProperty( '--queue-remaining', `'${moment.utc( totalTime + Spicetify.Player.getDuration() - Spicetify.Player.getProgress() ).format( 'HH:mm:ss' )} Remaining'` );
}, 1000 );
