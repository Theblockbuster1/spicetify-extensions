let qt_style = document.createElement( "style" );
qt_style.innerHTML = `
:root {
    --queue-remaining: "--:--:-- Remaining"
}
#queue-panel > div::after {
    content: var(--queue-remaining);
    color: var(--spice-subtext);
    font-size: 1rem;
    position: absolute;
    right: 24px;
    font-weight: initial;
    top: 21px;
}
`;
document.head.appendChild( qt_style );

setInterval( () => {
    const tracks = Spicetify.Queue?.nextTracks ?? [];
    let totalTime = 0;

    for (const track of tracks) {
        const duration = Number(track.contextTrack.metadata.duration);

        if (Number.isFinite(duration)) totalTime += duration;

        if (track.contextTrack.uri == 'spotify:delimiter') {
            break;
        }
    }

    const timestamp = new Date(
        Math.max( 0, totalTime +
            Spicetify.Player.getDuration() -
            Spicetify.Player.getProgress() )
    ).toISOString().slice( 11, 19 );

	document.documentElement.style.setProperty( '--queue-remaining', `'${timestamp} Remaining'` );
}, 1000 );