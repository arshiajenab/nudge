"use client";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function PlayerSaveButton({ song }) {
    const [loading, setLoading] = useState(false);
    const [saved, setSaved] = useState(false);

    // RESET STATE WHEN SONG CHANGES
    // Whenever the song's videoId changes, reset the button back to "Save"
    useEffect(() => {
        setLoading(false);
        setSaved(false);
    }, [song?.videoId]);

    const handleSave = async () => {
        if (loading || saved) return;
        setLoading(true);

        try {
            const response = await fetch(`/api/save-music`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    res: song, // Passes the whole song object (includes videoId!)
                }),
            });

            if (response.status === 201) {
                const data = await response.json();
                if (data.message === "already added") {
                    toast.success("Already saved", {
                        position: "bottom-center",
                    });
                    setSaved(true);
                } else {
                    toast.success("Saved to library", {
                        position: "bottom-center",
                    });
                    setSaved(true);
                }
            } else {
                toast.error("Failed to save", { position: "bottom-center" });
            }
        } catch (error) {
            console.log("Error saving song:", error);
            toast.error("Failed to save", { position: "bottom-center" });
        } finally {
            setLoading(false);
        }
    };

    // Dynamic styling for the green checkmark
    const iconColor = saved ? "#00d4aa" : "currentColor";

    return (
        <button
            onClick={handleSave}
            className="icon-btn save-player-btn"
            disabled={loading || saved}
            aria-label="Save song"
            style={{ color: iconColor }} // Ensures the SVG turns green
        >
            {loading ? (
                // Loading spinner
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ animation: "spin 1s linear infinite" }}
                >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
            ) : saved ? (
                // Checkmark icon
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            ) : (
                // Plus icon to save
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            )}
        </button>
    );
}
