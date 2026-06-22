"use client";
import { useEffect, useState } from "react";
import { Sk } from "../Skeleton";
import Save from "@/components/modules/Save";
import toast from "react-hot-toast";
import { usePlayer } from "@/components/modules/PlayerContext";
import { backgrounds } from "@/utils/background";
import Link from "next/link";

export default function Music() {
    const [prompt, setPrompt] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [loadingTextIndex, setLoadingTextIndex] = useState(0);
    const [playingIndex, setPlayingIndex] = useState(null);
    const [videoLoading, setVideoLoading] = useState(null);
    const { playSong, currentSong, isPlaying } = usePlayer();

    const fetchResponse = async () => {
        if (!prompt.trim()) {
            setError("Please enter a vibe.");
            return;
        }
        setLoading(true);
        setPlayingIndex(null);
        try {
            const response = await fetch(`/api/song-ai-model`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    prompt,
                }),
            });
            if (!response.ok) {
                setError("something went wrong!");
                toast.error("something went wrong!", {
                    position: "bottom-center",
                });
                return;
            }
            const data = await response.json();
            setResults(data);
        } catch (error) {
            console.log("Error fetching response:", error);
            setError("something went wrong!");
            toast.error("something went wrong!", {
                position: "bottom-center",
            });
            return null;
        } finally {
            setLoading(false);
        }
    };
    const handlePlay = async (index) => {
        const song = results.response[index];

        if (song.videoId) {
            playSong(song);
            return;
        }

        // fetch videoId first time
        const res = await fetch("/api/youtube-search", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: `${song.title} ${song.artist}` }),
        });
        const data = await res.json();

        const updatedSong = { ...song, videoId: data.videoId };
        setResults((prev) => ({
            ...prev,
            response: prev.response.map((s, i) =>
                i === index ? updatedSong : s,
            ),
        }));

        playSong(updatedSong);
    };

    const loadingSteps = [
        "✦ finding songs for you...",
        "✦ analyzing your vibe...",
        "✦ sorting emotional tracks...",
        "✦ matching artists...",
        "✦ scanning your mood frequency...",
        "✦ decoding late-night energy...",
        "✦ filtering overplayed tracks...",
        "✦ building your sound universe...",
        "✦ tuning emotional resonance...",
        "✦ syncing with your playlist history...",
        "✦ searching hidden indie gems...",
        "✦ checking heartbreak compatibility...",
        "✦ optimizing vibe accuracy...",
        "✦ assembling your sonic identity...",
        "✦ finalizing recommendations...",
    ];

    useEffect(() => {
        if (!loading) {
            setLoadingTextIndex(0);
            return;
        }
        const interval = setInterval(() => {
            setLoadingTextIndex((prev) =>
                prev === loadingSteps.length - 1 ? 0 : prev + 1,
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [loading]);

    return (
        <div id="music-tool" className="dash-section">
            <div style={{ marginBottom: "16px" }}>
                <Link
                    href="/panel"
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                        fontSize: "14px",
                        opacity: 0.7,
                    }}
                >
                    ← back to panel
                </Link>
            </div>

            <div className="tool-header">
                <h1>🎵 Find your next song (USE VPN)</h1>
                <p>
                    Describe your mood, vibe, or artists you like — AI suggests
                    the perfect tracks.
                </p>
            </div>

            <div className="tool-input-area">
                <label className="input-label">describe your vibe</label>

                <textarea
                    className="tool-textarea"
                    placeholder="e.g. I want something chill and emotional like The Weeknd but more indie, good for late night drives..."
                    maxLength={300}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />

                <div className="tool-submit">
                    <span className="char-count">{prompt.length} / 300</span>

                    <button
                        className="submit-btn"
                        onClick={fetchResponse}
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "✦ Nudge me"}
                    </button>
                </div>
            </div>

            <div className="results-label">
                {loading
                    ? loadingSteps[loadingTextIndex]
                    : error
                      ? "✦ something went wrong"
                      : results == true
                        ? "✦ suggested for you"
                        : "✦"}
            </div>

            <div className="result-cards">
                {loading
                    ? Array.from({ length: 5 }).map((_, index) => (
                          <div key={index} className="result-card">
                              <div
                                  className="result-thumb-placeholder"
                                  style={{
                                      background: backgrounds(),
                                  }}
                              >
                                  🎵
                              </div>

                              <div className="result-info">
                                  <div className="result-title">
                                      <Sk w="30%" h="30px" r="5px" mb="10px" />
                                  </div>
                                  <div
                                      className="result-sub"
                                      style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                      }}
                                  >
                                      <Sk w="10%" h="15px" r="5px" /> ·{" "}
                                      <Sk w="10%" h="15px" r="5px" /> ·{" "}
                                      <Sk w="10%" h="15px" r="5px" />
                                  </div>
                                  <div className="result-why">
                                      <Sk w="100%" h="15px" r="5px" />
                                  </div>
                              </div>
                          </div>
                      ))
                    : results?.response?.map((res, index) => {
                          return (
                              <div
                                  key={index}
                                  className="result-card"
                                  style={{
                                      flexDirection: "column",
                                      alignItems: "stretch",
                                  }}
                              >
                                  <div
                                      style={{
                                          display: "flex",
                                          gap: "16px",
                                          alignItems: "flex-start",
                                      }}
                                  >
                                      <div
                                          className="result-thumb-placeholder"
                                          style={{
                                              background: backgrounds(),
                                              cursor: "pointer",
                                          }}
                                          onClick={() => handlePlay(index)}
                                      >
                                          {currentSong?.videoId ===
                                              res.videoId && isPlaying
                                              ? "⏸"
                                              : "▶"}
                                      </div>

                                      <div className="result-info">
                                          <div className="result-title">
                                              {res.title}
                                          </div>
                                          <div className="result-sub">
                                              {res.artist} · {res.genre} ·{" "}
                                              {res.year}
                                          </div>
                                          <div className="result-why">
                                              {res.reason}
                                          </div>
                                          <div
                                              style={{
                                                  display: "flex",
                                                  gap: "6px",
                                                  marginTop: "8px",
                                              }}
                                          >
                                              <span
                                                  className="card-tag tag-pink"
                                                  style={{ margin: 0 }}
                                              >
                                                  {res.tag}
                                              </span>
                                              <span
                                                  className="card-tag tag-teal"
                                                  style={{ margin: 0 }}
                                              >
                                                  {res.tag2}
                                              </span>
                                          </div>
                                      </div>

                                      <div className="result-actions">
                                          <Save
                                              res={{
                                                  ...res,
                                                  videoId: res.videoId || null,
                                              }}
                                              method={"music"}
                                          />
                                      </div>
                                  </div>

                                  {/* youtube player only mounts when this card is the active one */}
                                  {playingIndex === index && res.videoId && (
                                      <iframe
                                          width="100%"
                                          height="200"
                                          style={{
                                              marginTop: "14px",
                                              borderRadius: "10px",
                                              border: "none",
                                          }}
                                          src={`https://www.youtube.com/embed/${res.videoId}?autoplay=1`}
                                          allow="autoplay; encrypted-media"
                                          allowFullScreen
                                      />
                                  )}
                              </div>
                          );
                      })}
            </div>
        </div>
    );
}
