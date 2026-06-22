import DeleteSave from "@/components/modules/DeleteSave";
import MusicCard from "@/components/modules/MusicCard";
import connectDB from "@/lib/db";
import Music from "@/models/Music";
import { authUser } from "@/utils/authUser";
import { backgrounds } from "@/utils/background";
import Link from "next/link";

const GetSaved = async () => {
    await connectDB();
    const user = await authUser();

    const musicSaved = await Music.find({ user: user._id }).lean();
    return { musicSaved };
};
export default async function Saved() {
    const { musicSaved } = await GetSaved();
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
                    <Link
                        href={"/panel/saved/music"}
                        className="tab-btn active"
                    >
                        🎵 Music
                    </Link>
                    <Link href={"/panel/saved/game"} className="tab-btn">
                        🎮 Games
                    </Link>
                </div>
            </div>
            {musicSaved.length < 1 ? (
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
                    </div>
                </div>
            ) : (
                <>
                    {/* MUSIC */}
                    {musicSaved.length > 0 && (
                        <>
                            <div
                                className="continue-label"
                                style={{ marginBottom: "12px" }}
                            >
                                🎵 music ({musicSaved.length}) (USE VPN)
                            </div>

                            <div
                                className="saved-grid"
                                style={{ marginBottom: "28px" }}
                            >
                                {/* Replace inline code with MusicCard */}
                                {musicSaved.map((music, index) => (
                                    <MusicCard
                                        key={index}
                                        music={JSON.parse(
                                            JSON.stringify(music),
                                        )}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
}
