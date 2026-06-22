import DeleteSave from "@/components/modules/DeleteSave";
import connectDB from "@/lib/db";
import Game from "@/models/Game";
import { authUser } from "@/utils/authUser";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

const GetSaved = async () => {
    await connectDB();
    const user = await authUser();

    const gameSaved = await Game.find({ user: user._id });

    return { gameSaved };
};
export default async function Saved() {
    const { gameSaved } = await GetSaved();
    return (
        <div id="saved" className="dash-section">
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
            <div className="page-header">
                <h2>Saved 🔖</h2>
                <p>Everything you&apos;ve bookmarked — organized by type.</p>
            </div>
            <div className="saved-tabs-row">
                <div className="tab-bar">
                    <Link href={"/panel/saved"} className="tab-btn ">
                        All
                    </Link>
                    <Link href={"/panel/saved/music"} className="tab-btn">
                        🎵 Music
                    </Link>
                    <Link href={"/panel/saved/game"} className="tab-btn active">
                        🎮 Games
                    </Link>
                </div>
            </div>
            {gameSaved.length < 1 ? (
                <div className="empty-state">
                    <div className="empty-icon">📭</div>

                    <h3 className="empty-title">Nothing saved yet</h3>

                    <p className="empty-sub">
                        You haven’t bookmarked any music or games yet. Start
                        exploring and save your favorites ✨
                    </p>

                    <div className="empty-actions">
                        <Link href="/panel/music" className="empty-btn">
                            🎵 Discover Music
                        </Link>

                        <Link
                            href="/panel/game"
                            className="empty-btn secondary"
                        >
                            🎮 Discover Games
                        </Link>
                    </div>
                </div>
            ) : (
                <>
                    {/* GAMES */}
                    {gameSaved.length > 0 && (
                        <>
                            <div
                                className="continue-label"
                                style={{ marginBottom: "12px" }}
                            >
                                🎮 games ({gameSaved.length})
                            </div>

                            <div className="saved-grid">
                                {gameSaved.map((game, index) => (
                                    <div key={index} className="saved-card">
                                        <div
                                            className="sc-thumb"
                                            style={{
                                                background:
                                                    "linear-gradient(135deg,#ff6eb033,#ff6eb066)",
                                            }}
                                        >
                                            🎮
                                        </div>

                                        <div className="sc-title">
                                            {game.title}
                                        </div>
                                        <div className="sc-sub">
                                            {game.studio} · {game.genre}
                                        </div>

                                        <div className="sc-tags">
                                            <span className="card-tag tag-pink">
                                                {game.supported}
                                            </span>
                                            <span className="card-tag tag-purple">
                                                {game.tag}
                                            </span>
                                        </div>

                                        <div className="sc-actions">
                                            <button className="sc-play-btn">
                                                🎮 More info
                                            </button>

                                            <DeleteSave
                                                res={JSON.parse(
                                                    JSON.stringify(game),
                                                )}
                                                method={"game"}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
}
