import connectDB from "@/lib/db";
import Game from "@/models/Game";
import Music from "@/models/Music";
import { authUser } from "@/utils/authUser";
import Link from "next/link";
import { redirect } from "next/navigation";
const GetSaved = async () => {
    await connectDB();
    const user = await authUser();
    const musicSaved = await Music.find({ user: user._id }).lean();
    const gameSaved = await Game.find({ user: user._id }).lean();

    return { musicSaved, gameSaved };
};
export default async function Overview() {
    const user = await authUser();
    if (!user) {
        redirect("/login");
    }
    const { musicSaved, gameSaved } = await GetSaved();
    return (
        <div id="dash-home" className="dash-section">
            <div className="dash-greeting">
                <h2>Good evening, Arshia 👋</h2>
                <p>Here&#39;s what&#39;s been happening on your Nudge.</p>
            </div>
            <div className="dash-stats">
                <div className="stat-card">
                    <div className="stat-num purple">{musicSaved.length}</div>
                    <div className="stat-label">Music Saved</div>
                </div>
                <div className="stat-card">
                    <div className="stat-num pink">{gameSaved.length}</div>
                    <div className="stat-label">Games Found</div>
                </div>
            </div>
            <div className="continue-section">
                <div className="continue-label">✦ jump back in</div>
                <div className="continue-cards">
                    <Link href={"/panel/music"} className="continue-card">
                        <div
                            className="cc-glow"
                            style={{ background: "var(--purple)" }}
                        ></div>
                        <div className="cc-icon">🎵</div>
                        <div className="cc-title">Music</div>
                        <div className="cc-desc">let&#39;s explore</div>
                        <div className="cc-arrow">→</div>
                    </Link>
                    <Link href={"/panel/game"} className="continue-card">
                        <div
                            className="cc-glow"
                            style={{ background: "var(--pink)" }}
                        ></div>
                        <div className="cc-icon">🎮</div>
                        <div className="cc-title">Games</div>
                        <div className="cc-desc">let&#39;s explore</div>
                        <div className="cc-arrow">→</div>
                    </Link>
                </div>
            </div>
            <div className="recent-activity-row">
                <div className="dash-card">
                    <Link href={"/panel/saved"} className="dash-card-action">
                        <div className="dash-card-header">
                            <span
                                className="dash-card-title"
                                style={{ fontSize: "25px" }}
                            >
                                Saved 🔖
                            </span>
                            View All →
                        </div>
                    </Link>
                </div>
                <div className="dash-card">
                    <Link href={"/panel/settings"} className="dash-card-action">
                        <div className="dash-card-header">
                            <span
                                className="dash-card-title"
                                style={{ fontSize: "25px" }}
                            >
                                Settings⚙️
                            </span>
                            View All →
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
