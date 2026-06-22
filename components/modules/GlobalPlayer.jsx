"use client";
import { usePlayer } from "@/components/modules/PlayerContext";
import { useState } from "react";
import PlayerSaveButton from "@/components/modules/PlayerSaveButton";

function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
}

function useBarHeights(seed, count = 64) {
    const [heights] = useState(() => {
        let s = seed?.length || 1;
        return Array.from({ length: count }, (_, i) => {
            s = (s * 9301 + 49297) % 233280;
            const rand = s / 233280;
            return 10 + rand * 90;
        });
    });
    return heights;
}

// Crisp SVG Icons
const IconPlay = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
    </svg>
);
const IconPause = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
    </svg>
);
const IconVolumeHigh = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
    </svg>
);
const IconVolumeLow = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
    </svg>
);
const IconVolumeMute = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
    </svg>
);
const IconClose = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);
const IconMusic = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
    </svg>
);

export default function GlobalPlayer() {
    const {
        currentSong,
        isPlaying,
        progress,
        duration,
        volume,
        muted,
        togglePlay,
        seekTo,
        changeVolume,
        toggleMute,
        closePlayer,
        onReady,
    } = usePlayer();

    const [expanded, setExpanded] = useState(false);
    const barHeights = useBarHeights(currentSong?.videoId, 64);

    // FIX: Wrap the null return in a Fragment so React
    // always has a consistent root node to mount/unmount
    if (!currentSong) return <></>;

    const progressPct = duration ? (progress / duration) * 100 : 0;
    const currentVol = muted ? 0 : volume;

    function handleSeekClick(e) {
        const bar = e.currentTarget;
        const rect = bar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const pct = Math.min(Math.max(clickX / rect.width, 0), 1);
        seekTo(pct * duration);
    }

    return (
        <div className={`global-player ${expanded ? "expanded" : ""}`}>
            {/* Background blur and glow effects */}
            <div className="player-glow" />

            {/* Top visualizer strip */}
            <div className="player-viz-strip">
                {barHeights.map((h, i) => (
                    <div
                        key={i}
                        className={`viz-bar ${isPlaying ? "playing" : ""}`}
                        style={{
                            height: `${h}%`,
                            animationDelay: `${(i * 0.045).toFixed(2)}s`,
                            animationDuration: `${(0.7 + (i % 5) * 0.15).toFixed(2)}s`,
                        }}
                    />
                ))}
            </div>

            {/* Expanded View Artwork */}
            {expanded && (
                <div className="expanded-artwork">
                    <div
                        className={`artwork-circle ${isPlaying ? "spinning" : ""}`}
                    >
                        <IconMusic />
                    </div>
                </div>
            )}

            <div className="player-bar">
                <div
                    className="player-info"
                    onClick={() => setExpanded(!expanded)}
                >
                    <div className="player-thumb">
                        <span className="thumb-icon">
                            <IconMusic />
                        </span>
                    </div>
                    <div className="player-text">
                        <div className="player-title">{currentSong.title}</div>
                        <div className="player-artist">
                            {currentSong.artist}
                        </div>
                    </div>
                </div>

                <div className="player-center">
                    <div className="player-controls">
                        <button
                            onClick={togglePlay}
                            className="player-play-btn"
                            aria-label={isPlaying ? "Pause" : "Play"}
                        >
                            {isPlaying ? <IconPause /> : <IconPlay />}
                        </button>
                    </div>

                    <div className="player-progress-row">
                        <span className="player-time">
                            {formatTime(progress)}
                        </span>
                        <div
                            className="player-seek-track"
                            onClick={handleSeekClick}
                        >
                            <div
                                className="player-seek-fill"
                                style={{ width: `${progressPct}%` }}
                            >
                                <div className="player-seek-handle" />
                            </div>
                        </div>
                        <span className="player-time">
                            {formatTime(duration)}
                        </span>
                    </div>
                </div>

                <div className="player-right">
                    <div className="player-volume">
                        <button
                            onClick={toggleMute}
                            className="icon-btn"
                            aria-label="Mute"
                        >
                            {currentVol === 0 ? (
                                <IconVolumeMute />
                            ) : currentVol < 50 ? (
                                <IconVolumeLow />
                            ) : (
                                <IconVolumeHigh />
                            )}
                        </button>
                        <div className="volume-slider-wrap">
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={currentVol}
                                onChange={(e) =>
                                    changeVolume(Number(e.target.value))
                                }
                                className="player-volume-slider"
                                style={{ "--vol-pct": `${currentVol}%` }}
                            />
                        </div>
                    </div>

                    {/* SAVE BUTTON & CLOSE BUTTON SECTION */}
                    <PlayerSaveButton song={currentSong} />

                    <button
                        onClick={closePlayer}
                        className="icon-btn close-player"
                        aria-label="Close player"
                    >
                        <IconClose />
                    </button>
                </div>
            </div>
        </div>
    );
}
