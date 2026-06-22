export default function Preferences() {
    return (
        <div id="s-preferences" className="settings-section active">
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
                        <div className="sr-title">Auto-save suggestions</div>
                        <div className="sr-desc">
                            Automatically save all AI suggestions to history
                        </div>
                    </div>

                    <div className="toggle on" />
                </div>

                <div className="settings-row">
                    <div className="settings-row-info">
                        <div className="sr-title">Streaming responses</div>
                        <div className="sr-desc">
                            Show AI typing word-by-word like ChatGPT
                        </div>
                    </div>

                    <div className="toggle on" />
                </div>

                <div className="settings-row">
                    <div className="settings-row-info">
                        <div className="sr-title">Suggestions per query</div>
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

            <button className="save-settings-btn">Save preferences</button>
        </div>
    );
}
