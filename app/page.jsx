import Link from "next/link";

export default function Home() {
    return (
        <div id="landing" className="page active">
            <section className="hero">
                <div className="hero-badge">✦ AI-powered suggestions</div>
                <h1>
                    When you don&apos;t know
                    <br />
                    <span className="grad">what&apos;s next</span>
                </h1>
                <p>
                    Nudge helps you find your next game, song, or code review —
                    powered by AI, tailored to you.
                </p>
                <div className="hero-btns">
                    <Link href={"/login"} className="btn-primary">Get started free →</Link>
                    <Link href={"/panel"} className="btn-ghost">See it in action</Link>
                </div>
            </section>
            <section className="bento-section">
                <div className="section-label">✦ What Nudge does</div>
                <div className="section-title">
                    Three tools.
                    <br />
                    Zero indecision.
                </div>
                <div className="bento-grid">
                    <div className="bento-card col-7 card-purple">
                        <div className="accent-bar"></div>
                        <span className="card-tag tag-purple">🎵 music</span>
                        <h3>Don&apos;t know what to listen to?</h3>
                        <p>
                            Describe your mood or vibe and get AI-curated song
                            suggestions with YouTube previews.
                        </p>
                        <div className="mock-songs">
                            <div className="mock-song">
                                <div
                                    className="mock-song-thumb"
                                    style={{
                                        background:
                                            "linear-gradient(135deg,#7c6fff,#00d4aa)",
                                    }}
                                ></div>
                                <div>
                                    <div className="mock-song-title">
                                        Blinding Lights
                                    </div>
                                    <div className="mock-song-artist">
                                        The Weeknd · synth-pop
                                    </div>
                                </div>
                            </div>
                            <div className="mock-song">
                                <div
                                    className="mock-song-thumb"
                                    style={{
                                        background:
                                            "linear-gradient(135deg,#ff6eb0,#7c6fff)",
                                    }}
                                ></div>
                                <div>
                                    <div className="mock-song-title">
                                        Levitating
                                    </div>
                                    <div className="mock-song-artist">
                                        Dua Lipa · pop
                                    </div>
                                </div>
                            </div>
                            <div className="mock-song">
                                <div
                                    className="mock-song-thumb"
                                    style={{
                                        background:
                                            "linear-gradient(135deg,#00d4aa,#60a5fa)",
                                    }}
                                ></div>
                                <div>
                                    <div className="mock-song-title">
                                        As It Was
                                    </div>
                                    <div className="mock-song-artist">
                                        Harry Styles · indie pop
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bento-card col-5 card-teal">
                        <div className="accent-bar"></div>
                        <span className="card-tag tag-teal">
                            💻 code review
                        </span>
                        <h3>Get your code scored</h3>
                        <p>
                            Paste code, get an AI score + improvement tips
                            instantly.
                        </p>
                        <div className="mock-score">87</div>
                        <div
                            style={{
                                fontSize: "12px;color:var(--muted)",
                                fontFamily: "var(--mono)",
                            }}
                        >
                            out of 100 — great code
                        </div>
                        <div className="mock-bars">
                            <div className="mock-bar-row">
                                <span className="mock-bar-label">
                                    readability
                                </span>
                                <div className="mock-bar-track">
                                    <div
                                        className="mock-bar-fill"
                                        style={{
                                            width: "90%",
                                            background: "var(--teal)",
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div className="mock-bar-row">
                                <span className="mock-bar-label">
                                    performance
                                </span>
                                <div className="mock-bar-track">
                                    <div
                                        className="mock-bar-fill"
                                        style={{
                                            width: "80%",
                                            background: "var(--purple)",
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div className="mock-bar-row">
                                <span className="mock-bar-label">
                                    best practices
                                </span>
                                <div className="mock-bar-track">
                                    <div
                                        className="mock-bar-fill"
                                        style={{
                                            width: "85%",
                                            background: "var(--pink)",
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bento-card col-8 card-pink">
                        <div className="accent-bar"></div>
                        <span className="card-tag tag-pink">🎮 games</span>
                        <h3>Don&apos;t know what to play?</h3>
                        <p>
                            Tell AI games you&apos;ve loved or what kind of game
                            you&apos;re craving — it finds your next obsession.
                        </p>
                        <div className="mock-games">
                            <div className="mock-game">
                                <div
                                    className="mock-game-icon"
                                    style={{
                                        background:
                                            "linear-gradient(135deg,#7c6fff22,#7c6fff44)",
                                    }}
                                >
                                    🏔️
                                </div>
                                <div>
                                    <div className="mock-game-title">
                                        Elden Ring
                                    </div>
                                    <div className="mock-game-genre">
                                        action-rpg · open world
                                    </div>
                                </div>
                            </div>
                            <div className="mock-game">
                                <div
                                    className="mock-game-icon"
                                    style={{
                                        background:
                                            "linear-gradient(135deg,#00d4aa22,#00d4aa44)",
                                    }}
                                >
                                    🌿
                                </div>
                                <div>
                                    <div className="mock-game-title">
                                        Hollow Knight
                                    </div>
                                    <div className="mock-game-genre">
                                        metroidvania · indie
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bento-card col-4">
                        <div style={{ fontSize: "28px", marginBottom: "12px" }}>
                            💾
                        </div>
                        <h3>Your history, saved</h3>
                        <p style={{ fontSize: "13px" }}>
                            Every suggestion saved to your dashboard. Come back
                            anytime.
                        </p>
                    </div>
                    <div
                        className="bento-card col-12"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            gap: "16px",
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    fontSize: "20px",
                                    fontWeight: "700",
                                    letterSpacing: "-0.03em",
                                    marginBottom: "4px",
                                }}
                            >
                                Ready to stop being indecisive? 👀
                            </div>
                            <div
                                style={{
                                    fontSize: "14px",
                                    color: "var(--muted)",
                                }}
                            >
                                Free forever. No credit card. Just vibes.
                            </div>
                        </div>
                        <Link href={"/login"} className="btn-primary">
                            Start for free →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
