export default function Notifications() {
    return (
        <div className="settings-section active">
            <div className="settings-group">
                <div className="settings-row">
                    <div className="settings-row-info">
                        <div className="sr-title">Email notifications</div>
                        <div className="sr-desc">
                            Receive weekly digests and feature updates
                        </div>
                    </div>

                    <div className="toggle" />
                </div>

                <div className="settings-row">
                    <div className="settings-row-info">
                        <div className="sr-title">Product updates</div>
                        <div className="sr-desc">
                            Be notified when new features launch
                        </div>
                    </div>

                    <div className="toggle on" />
                </div>
            </div>

            <button className="save-settings-btn">Save notifications</button>
        </div>
    );
}
