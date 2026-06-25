"use client";

import { useEffect, useState } from "react";
import { Sk } from "../Skeleton";
import toast from "react-hot-toast";
import Save from "@/components/modules/Save";
import { backgrounds } from "@/utils/background";
import Link from "next/link";
export default function Game() {
    const [prompt, setPrompt] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [loadingTextIndex, setLoadingTextIndex] = useState(0);
    const [disableSave, setDisableSave] = useState(false);
    const fetchResponse = async () => {
        if (!prompt.trim()) {
            setError("Please enter a vibe.");
            return;
        }
        setLoading(true);
        try {
            const response = await fetch(`/api/game-ai-model`, {
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
        <div id="games-tool" className="dash-section">
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
                <h1>🎮 Find your next game</h1>
                <p>
                    Tell us games you&apos;ve loved or what type of game
                    you&apos;re craving right now.
                </p>
            </div>

            <div className="tool-input-area">
                <label className="input-label">what are you looking for?</label>

                <textarea
                    className="tool-textarea"
                    placeholder="e.g. I love Elden Ring and Dark Souls, something challenging with a great story..."
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
                        ? "✦ Games you like"
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
                                  🎯
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
                              <div key={index} className="result-card">
                                  <div
                                      className="result-thumb-placeholder"
                                      style={{
                                          background: backgrounds(),
                                      }}
                                  >
                                      🎯
                                  </div>
                                  <div
                                      style={{
                                          display: "flex",
                                          gap: "16px",
                                          alignItems: "flex-start",
                                          width: "100%",
                                          important: true,
                                      }}
                                  >
                                      <div
                                          className="result-info"
                                          style={{ flex: 1, important: true }}
                                      >
                                          <div className="result-title">
                                              {res.title}
                                          </div>
                                          <div className="result-sub">
                                              {res.studio} · {res.genre} ·{" "}
                                              {res.supported}
                                          </div>

                                          <div className="result-why">
                                              {res.reason}
                                          </div>

                                          <div
                                              style={{
                                                  display: "flex",
                                                  gap: "6px",
                                                  marginTop: "8px",
                                                  alignItems: "flex-start",
                                                  width: "100%",
                                                  important: true,
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

                                      <div
                                          className={`result-actions`}
                                          onClick={() => setDisableSave(true)}
                                      >
                                          <Save
                                              res={res}
                                              method={"game"}
                                              disableSave={disableSave}
                                          />
                                      </div>
                                  </div>
                              </div>
                          );
                      })}
            </div>
        </div>
    );
}
