
export default function Settings() {
    return (
        <div id="settings" className="dash-section">
            <div className="page-header">
                <h2>Settings ⚙️</h2>
                <p>Manage your account and preferences.</p>
            </div>

            <div className="settings-layout">
                <div className="settings-nav">
                    <button className="settings-nav-item active">
                        👤 Profile
                    </button>

                    <button className="settings-nav-item">
                        🎨 Preferences
                    </button>

                    <button className="settings-nav-item">
                        🔔 Notifications
                    </button>

                    <button className="settings-nav-item">🔐 Account</button>
                </div>

                <div>
                    {/* PROFILE */}
                    <div id="s-profile" className="settings-section active">
                        <div className="settings-group">
                            <div className="profile-avatar-row">
                                <div className="profile-avatar-big">JS</div>

                                <div>
                                    <div
                                        style={{
                                            fontSize: "15px",
                                            fontWeight: 700,
                                            marginBottom: "4px",
                                        }}
                                    >
                                        John Smith
                                    </div>

                                    <div
                                        style={{
                                            fontSize: "13px",
                                            color: "var(--muted)",
                                            fontFamily: "var(--mono)",
                                        }}
                                    >
                                        john@example.com
                                    </div>
                                </div>
                            </div>

                            <div className="settings-row">
                                <div className="settings-row-info">
                                    <div className="sr-title">Display name</div>
                                    <div className="sr-desc">
                                        Shown on your dashboard
                                    </div>
                                </div>
                                <input
                                    className="settings-input"
                                    defaultValue="John Smith"
                                />
                            </div>

                            <div className="settings-row">
                                <div className="settings-row-info">
                                    <div className="sr-title">
                                        Email address
                                    </div>
                                    <div className="sr-desc">
                                        Used for sign in
                                    </div>
                                </div>
                                <input
                                    className="settings-input"
                                    defaultValue="john@example.com"
                                />
                            </div>
                        </div>

                        <button className="save-settings-btn">
                            Save changes
                        </button>
                    </div>

                    {/* PREFERENCES */}
                    <div id="s-preferences" className="settings-section">
                        <div className="settings-group">
                            <div className="settings-row">
                                <div className="settings-row-info">
                                    <div className="sr-title">Default tool</div>
                                    <div className="sr-desc">
                                        Which tool opens first in dashboard
                                    </div>
                                </div>

                                <select className="settings-select">
                                    <option>Music</option>
                                    <option>Games</option>
                                    <option>Code Review</option>
                                    <option>Overview</option>
                                </select>
                            </div>

                            <div className="settings-row">
                                <div className="settings-row-info">
                                    <div className="sr-title">
                                        Auto-save suggestions
                                    </div>
                                    <div className="sr-desc">
                                        Automatically save all AI suggestions to
                                        history
                                    </div>
                                </div>

                                <div className="toggle on" />
                            </div>

                            <div className="settings-row">
                                <div className="settings-row-info">
                                    <div className="sr-title">
                                        Streaming responses
                                    </div>
                                    <div className="sr-desc">
                                        Show AI typing word-by-word like ChatGPT
                                    </div>
                                </div>

                                <div className="toggle on" />
                            </div>

                            <div className="settings-row">
                                <div className="settings-row-info">
                                    <div className="sr-title">
                                        Suggestions per query
                                    </div>
                                    <div className="sr-desc">
                                        How many results AI returns each time
                                    </div>
                                </div>

                                <select className="settings-select">
                                    <option>3 results</option>
                                    <option>5 results</option>
                                    <option>7 results</option>
                                </select>
                            </div>
                        </div>

                        <button className="save-settings-btn">
                            Save preferences
                        </button>
                    </div>

                    {/* NOTIFICATIONS */}
                    <div id="s-notifications" className="settings-section">
                        <div className="settings-group">
                            <div className="settings-row">
                                <div className="settings-row-info">
                                    <div className="sr-title">
                                        Email notifications
                                    </div>
                                    <div className="sr-desc">
                                        Receive weekly digests and feature
                                        updates
                                    </div>
                                </div>

                                <div className="toggle" />
                            </div>

                            <div className="settings-row">
                                <div className="settings-row-info">
                                    <div className="sr-title">
                                        Product updates
                                    </div>
                                    <div className="sr-desc">
                                        Be notified when new features launch
                                    </div>
                                </div>

                                <div className="toggle on" />
                            </div>
                        </div>

                        <button className="save-settings-btn">
                            Save notifications
                        </button>
                    </div>

                    {/* ACCOUNT */}
                    <div id="s-account" className="settings-section">
                        <div
                            className="settings-group"
                            style={{ marginBottom: "16px" }}
                        >
                            <div className="settings-row">
                                <div className="settings-row-info">
                                    <div className="sr-title">Current plan</div>
                                    <div className="sr-desc">
                                        Free plan — unlimited suggestions
                                    </div>
                                </div>

                                <span
                                    className="card-tag tag-purple"
                                    style={{ margin: 0 }}
                                >
                                    Free
                                </span>
                            </div>

                            <div className="settings-row">
                                <div className="settings-row-info">
                                    <div className="sr-title">
                                        Connected account
                                    </div>
                                    <div className="sr-desc">
                                        Signed in with Google
                                    </div>
                                </div>

                                <span
                                    style={{
                                        fontSize: "13px",
                                        color: "var(--muted)",
                                        fontFamily: "var(--mono)",
                                    }}
                                >
                                    Google
                                </span>
                            </div>

                            <div className="settings-row">
                                <div className="settings-row-info">
                                    <div className="sr-title">Sign out</div>
                                    <div className="sr-desc">
                                        Sign out of your account on this device
                                    </div>
                                </div>

                                <button className="icon-btn">Sign out</button>
                            </div>
                        </div>

                        <div className="danger-zone">
                            <div className="danger-title">⚠ Danger zone</div>
                            <div className="danger-desc">
                                Deleting your account is permanent. All your
                                saved items, history, and preferences will be
                                erased and cannot be recovered.
                            </div>

                            <button className="danger-btn">
                                Delete account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
