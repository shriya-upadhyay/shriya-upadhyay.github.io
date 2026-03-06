import { useState, useEffect } from 'react';
import { FaSpotify } from 'react-icons/fa';
import './SpotifyWidget.css';

function SpotifyWidget() {
    const [tracks, setTracks] = useState(null);

    useEffect(() => {
        fetch('/spotify.json')
            .then(r => {
                if (!r.ok) throw new Error();
                return r.json();
            })
            .then(data => {
                if (Array.isArray(data) && data.length) {
                    setTracks(data);
                } else {
                    setTracks([]); // prevent infinite null state
                }
            })
            .catch(() => setTracks([]));
    }, []);

    if (tracks === null) return null;

    return (
        <div className="spotify-widget">
            <div className="spotify-header">
                <FaSpotify className="spotify-icon" />
                <span className="spotify-title">
                    Top Tracks — Last 4 Weeks
                </span>
            </div>

            {tracks.length === 0 ? (
                <div className="spotify-empty">
                    No listening data available.
                </div>
            ) : (
                <div className="spotify-tracks">
                    {tracks.map((track, i) => (
                        <a
                            key={track.url}
                            href={track.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="spotify-track"
                        >
                            <span className="spotify-rank">
                                #{i + 1}
                            </span>

                            <img
                                src={track.albumArt}
                                alt={track.album}
                                className="spotify-album-art"
                            />

                            <div className="spotify-track-info">
                                <span className="spotify-track-title">
                                    {track.title}
                                </span>
                                <span className="spotify-track-artist">
                                    {track.artist}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SpotifyWidget;