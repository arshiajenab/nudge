"use client";
import { usePlayer } from "@/components/modules/PlayerContext";
import DeleteSave from "@/components/modules/DeleteSave";
import { useState } from "react";
import { backgrounds } from "@/utils/background";

export default function MusicCard({ music }) {
    const { playSong, currentSong, isPlaying } = usePlayer();
    const [isSearching, setIsSearching] = useState(false);

    // Check if THIS specific song is currently playing
    const isThisPlaying = currentSong?.videoId === music.videoId && isPlaying;

    const handlePlay = async () => {
        // If we already have the videoId, just play it instantly
        if (music.videoId) {
            playSong(music);
            return;
        }

        // If no videoId in DB, fetch it on the fly (just like on the discover page)
        setIsSearching(true);
        try {
            const res = await fetch("/api/youtube-search", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    query: `${music.title} ${music.artist}`,
                }),
            });
            const data = await res.json();

            const updatedSong = { ...music, videoId: data.videoId };
            playSong(updatedSong);
        } catch (error) {
            console.error("Error fetching video:", error);
        } finally {
            setIsSearching(false);
        }
    };

    return (
        <div className="saved-card">
            <div
                className="sc-thumb"
                style={{ background: backgrounds(), cursor: "pointer" }}
                onClick={handlePlay}
            >
                {isThisPlaying ? "⏸" : "🎵"}
            </div>
            <div className="sc-title">{music.title}</div>
            <div className="sc-sub">
                {music.artist} · {music.genre} · {music.year}
            </div>
            <div className="sc-tags">
                <span className="card-tag tag-purple">{music.tag}</span>
                <span className="card-tag tag-teal">{music.tag2}</span>
            </div>
            <div className="sc-actions">
                <button
                    className="sc-play-btn"
                    onClick={handlePlay}
                    disabled={isSearching}
                >
                    {isSearching
                        ? "Searching..."
                        : isThisPlaying
                          ? "⏸ Pause"
                          : "▶ Play"}
                </button>

                <DeleteSave
                    res={JSON.parse(JSON.stringify(music))}
                    method={"music"}
                />
            </div>
        </div>
    );
}
