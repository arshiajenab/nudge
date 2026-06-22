"use client";
import { createContext, useContext, useState, useRef, useEffect } from "react";

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(70);
    const [muted, setMuted] = useState(false);

    const playerRef = useRef(null);
    const intervalRef = useRef(null);
    const containerRef = useRef(null); // 1. Use a ref instead of an ID

    // ── load the YouTube IFrame API script once ──
    useEffect(() => {
        if (window.YT) return;

        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);

        return () => {
            if (window.onYouTubeIframeAPIReady) {
                window.onYouTubeIframeAPIReady = null;
            }
        };
    }, []);

    // ── create / swap the player whenever the song changes ──
    useEffect(() => {
        if (!currentSong?.videoId) {
            if (playerRef.current && playerRef.current.stopVideo) {
                try {
                    playerRef.current.pauseVideo();
                    playerRef.current.stopVideo();
                    playerRef.current.cueVideoById(""); 
                } catch (e) {
                    console.error("Error stopping video", e);
                }
            }
            return;
        }

        function createPlayer() {
            if (playerRef.current && playerRef.current.loadVideoById) {
                playerRef.current.loadVideoById(currentSong.videoId);
                playerRef.current.playVideo();
                return;
            }

            const playerContainer = document.createElement("div");
            containerRef.current.appendChild(playerContainer);

            playerRef.current = new window.YT.Player(playerContainer, {
                height: "0",
                width: "0",
                videoId: currentSong.videoId,
                playerVars: {
                    autoplay: 1,
                    controls: 0,
                    disablekb: 1,
                    modestbranding: 1,
                },
                events: {
                    onReady: (e) => {
                        setIsReady(true);
                        e.target.setVolume(volume);
                        e.target.playVideo();
                    },
                    onStateChange: (e) => {
                        // 1 = playing, 2 = paused, 0 = ended
                        // -1 = unstarted, 5 = cued
                        if (e.data === 1) {
                            setIsPlaying(true);
                        } else if (e.data === 2) {
                            setIsPlaying(false);
                        } else if (e.data === 0) {
                            setIsPlaying(false);
                            setProgress(0);
                        }

                        if (e.data === -1 || e.data === 5) {
                            setTimeout(() => {
                                if (
                                    playerRef.current &&
                                    playerRef.current.getPlayerState
                                ) {
                                    const state =
                                        playerRef.current.getPlayerState();
                                    if (state !== 1) {
                                        // If it's still not playing
                                        playerRef.current.playVideo();
                                    }
                                }
                            }, 200);
                        }
                    },
                },
            });
        }

        if (window.YT && window.YT.Player) {
            createPlayer();
        } else {
            window.onYouTubeIframeAPIReady = createPlayer;
        }
    }, [currentSong]);

    // ── progress tracker ──
    useEffect(() => {
        if (isPlaying && isReady) {
            intervalRef.current = setInterval(() => {
                if (playerRef.current?.getCurrentTime) {
                    setProgress(playerRef.current.getCurrentTime());
                    setDuration(playerRef.current.getDuration());
                }
            }, 500);
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isPlaying, isReady]);

    function playSong(song) {
        setCurrentSong(song);
        setProgress(0);
        setDuration(0);
    }

    const togglePlay = () => {
        if (!isReady || !playerRef.current) return;
        try {
            const state = playerRef.current.getPlayerState();
            if (state === 1 || state === 3) {
                playerRef.current.pauseVideo();
                setIsPlaying(false);
            } else {
                playerRef.current.playVideo();
                setIsPlaying(true);
            }
        } catch (error) {
            console.error("Failed to toggle play:", error);
        }
    };

    function seekTo(seconds) {
        if (!isReady || !playerRef.current) return;
        playerRef.current.seekTo(seconds, true);
        setProgress(seconds);
    }

    function changeVolume(value) {
        setVolume(value);
        if (isReady && playerRef.current) {
            playerRef.current.setVolume(value);
            if (value === 0) setMuted(true);
            else if (muted) {
                setMuted(false);
                playerRef.current.unMute();
            }
        }
    }

    function toggleMute() {
        if (!isReady || !playerRef.current) return;
        if (muted) {
            playerRef.current.unMute();
            playerRef.current.setVolume(volume || 70);
            setMuted(false);
        } else {
            playerRef.current.mute();
            setMuted(true);
        }
    }

    // 3. As you requested, just pause and set currentSong to null.
    // Because we use containerRef, React won't crash when this hides the UI.
    function closePlayer() {
        // 1. Force pause and stop BEFORE clearing the state
        if (isReady && playerRef.current) {
            try {
                playerRef.current.pauseVideo();
                playerRef.current.stopVideo();
            } catch (e) {
                console.error("Error stopping video", e);
            }
        }

        // 2. Clear the UI state
        setCurrentSong(null);
        setIsPlaying(false);
        setProgress(0);
        setDuration(0);
    }

    return (
        <PlayerContext.Provider
            value={{
                currentSong,
                isPlaying,
                isReady,
                progress,
                duration,
                volume,
                muted,
                playSong,
                togglePlay,
                seekTo,
                changeVolume,
                toggleMute,
                closePlayer,
            }}
        >
            {children}
            {/* 4. React controls this div, YouTube controls what's inside it */}
            <div ref={containerRef} style={{ display: "none" }} />
        </PlayerContext.Provider>
    );
}

export function usePlayer() {
    return useContext(PlayerContext);
}
