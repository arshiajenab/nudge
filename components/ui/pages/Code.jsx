import React from "react";

export default function Code() {
    return (
        <div id="code-tool" className="dash-section">
            <div className="tool-header">
                <h1>💻 Code reviewer</h1>
                <p>
                    Paste your code and get an AI score from 0–100 with detailed
                    improvement tips.
                </p>
            </div>

            <div className="tool-input-area">
                <label className="input-label">your code</label>

                <select className="lang-select">
                    <option>JavaScript</option>
                    <option>TypeScript</option>
                    <option>Python</option>
                    <option>React / JSX</option>
                    <option>CSS</option>
                    <option>Other</option>
                </select>

                <textarea
                    className="tool-textarea code-textarea"
                    placeholder={`// paste your code here...
function fetchUser(id) { 
  fetch('/api/user/' + id).then(res => {
    return res.json()
  }).then(data => {
    console.log(data)
  })
}`}
                />

                <div className="tool-submit">
                    <span className="char-count">0 / 5000</span>
                    <button className="submit-btn">✦ Review my code →</button>
                </div>
            </div>

            <div className="results-label">✦ review results</div>

            <div className="dash-card" style={{ marginBottom: "14px" }}>
                <div className="score-display">
                    <div className="score-ring">
                        <svg width="110" height="110" viewBox="0 0 110 110">
                            <circle
                                cx="55"
                                cy="55"
                                r="46"
                                fill="none"
                                stroke="rgba(255,255,255,0.06)"
                                strokeWidth="8"
                            />
                            <circle
                                cx="55"
                                cy="55"
                                r="46"
                                fill="none"
                                stroke="url(#scoreGrad)"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeDasharray="289"
                                strokeDashoffset={289 * (1 - 73 / 100)}
                            />

                            <defs>
                                <linearGradient
                                    id="scoreGrad"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="0%"
                                >
                                    <stop offset="0%" stopColor="#7c6fff" />
                                    <stop offset="100%" stopColor="#00d4aa" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <div className="score-ring-text">
                            <span
                                className="score-num"
                                style={{
                                    background:
                                        "linear-gradient(135deg,var(--purple),var(--teal))",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                81
                            </span>

                            <span className="score-lbl">/ 100</span>
                        </div>
                    </div>

                    <div className="score-breakdown">
                        <h3>Good code — a few things to fix</h3>

                        <div className="score-bar-row">
                            <span className="score-bar-label">readability</span>

                            <div className="score-bar-track">
                                <div
                                    className="score-bar-fill"
                                    style={{
                                        width: "90%",
                                        background: "var(--purple)",
                                    }}
                                />
                            </div>

                            <span
                                className="score-bar-val"
                                style={{ color: "var(--purple)" }}
                            >
                                90
                            </span>
                        </div>

                        <div className="score-bar-row">
                            <span className="score-bar-label">performance</span>

                            <div className="score-bar-track">
                                <div
                                    className="score-bar-fill"
                                    style={{
                                        width: "75%",
                                        background: "var(--teal)",
                                    }}
                                />
                            </div>

                            <span
                                className="score-bar-val"
                                style={{ color: "var(--teal)" }}
                            >
                                75
                            </span>
                        </div>

                        <div className="score-bar-row">
                            <span className="score-bar-label">
                                best practices
                            </span>

                            <div className="score-bar-track">
                                <div
                                    className="score-bar-fill"
                                    style={{
                                        width: "80%",
                                        background: "var(--pink)",
                                    }}
                                />
                            </div>

                            <span
                                className="score-bar-val"
                                style={{ color: "var(--pink)" }}
                            >
                                80
                            </span>
                        </div>

                        <div className="score-bar-row">
                            <span className="score-bar-label">
                                error handling
                            </span>

                            <div className="score-bar-track">
                                <div
                                    className="score-bar-fill"
                                    style={{
                                        width: "60%",
                                        background: "var(--amber)",
                                    }}
                                />
                            </div>

                            <span
                                className="score-bar-val"
                                style={{ color: "var(--amber)" }}
                            >
                                60
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="results-label">✦ feedback</div>

            <div className="feedback-items">
                <div className="feedback-item">
                    <div className="feedback-item-header">
                        <span className="feedback-badge badge-warn">
                            ⚠ missing
                        </span>
                        <span className="feedback-title">
                            No error handling on fetch
                        </span>
                    </div>

                    <div className="feedback-desc">
                        Add a .catch() block or try/catch with async/await to
                        handle network failures.
                    </div>
                </div>

                <div className="feedback-item">
                    <div className="feedback-item-header">
                        <span className="feedback-badge badge-improve">
                            ↑ improve
                        </span>
                        <span className="feedback-title">
                            Use async/await instead of .then()
                        </span>
                    </div>

                    <div className="feedback-desc">
                        Rewriting with async/await makes the code more readable
                        and easier to debug.
                    </div>
                </div>

                <div className="feedback-item">
                    <div className="feedback-item-header">
                        <span className="feedback-badge badge-good">
                            ✓ good
                        </span>
                        <span className="feedback-title">
                            Clean function structure
                        </span>
                    </div>

                    <div className="feedback-desc">
                        Single responsibility, concise, good separation of
                        concerns.
                    </div>
                </div>
            </div>
        </div>
    );
}
