let qt_style = document.createElement( "style" );
qt_style.innerHTML = `
h2.OSrSKCORKBO4JZclYmQ5.standalone-ellipsis-one-line::after {
    content: var(--queue-remaining);
    float: right;
    color: gray;
}
`;
document.head.appendChild( qt_style );

let momentScript = document.createElement( "script" );
momentScript.setAttribute( 'src', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js' );
momentScript.setAttribute( 'integrity', 'sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ==' );
momentScript.setAttribute( 'crossorigin', 'anonymous' );
momentScript.setAttribute( 'referrerpolicy', 'no-referrer' );
document.head.appendChild( momentScript );

setInterval( function () {
	let totalTime = 0;
	Spicetify.Queue?.nextTracks.some( t => {
		if ( isNaN( Number( t.contextTrack.metadata.duration ) ) ) return true;
		totalTime += Number( t.contextTrack.metadata.duration );
	} );
	document.querySelector( `h2.OSrSKCORKBO4JZclYmQ5` )?.style.setProperty( '--queue-remaining', `'${moment.utc( totalTime + Spicetify.Player.getDuration() - Spicetify.Player.getProgress() ).format( 'HH:mm:ss' )} Remaining'` );
}, 1000 );
