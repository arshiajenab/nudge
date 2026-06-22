import { logout } from "@/actions/CrudAcc";
import connectDB from "@/lib/db";
import User from "@/models/User";
import { authUser } from "@/utils/authUser";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Account() {
    const user = await authUser();
    const deleteAccount = async () => {
        "use server";
        const cookieStore = await cookies();
        const token = cookieStore.get("token");
        if (!token) redirect("/login");
        cookieStore.delete("token");
        await connectDB();
        await User.findByIdAndDelete(user._id);
        redirect("/login");
    };
    return (
        <div className="settings-section active">
            <div className="settings-group" style={{ marginBottom: "16px" }}>
                <div className="settings-row">
                    <div className="settings-row-info">
                        <div className="sr-title">Current plan</div>
                        <div className="sr-desc">
                            Free plan — unlimited suggestions
                        </div>
                    </div>

                    <span className="card-tag tag-purple" style={{ margin: 0 }}>
                        Free
                    </span>
                </div>

                <div className="settings-row">
                    <form className="settings-row-info">
                        <div className="sr-title">Connected account</div>
                        <div className="sr-desc">
                            Signed in with {user?.provider}
                        </div>
                    </form>

                    <span
                        style={{
                            fontSize: "13px",
                            color: "var(--muted)",
                            fontFamily: "var(--mono)",
                        }}
                    >
                        {user?.provider}
                    </span>
                </div>

                <form action={logout} className="settings-row">
                    <div className="settings-row-info">
                        <div className="sr-title">Sign out</div>
                        <div className="sr-desc">
                            Sign out of your account on this device
                        </div>
                    </div>

                    <button className="icon-btn">Sign out</button>
                </form>
            </div>

            <form action={deleteAccount} className="danger-zone">
                <div className="danger-title">⚠ Danger zone</div>
                <div className="danger-desc">
                    Deleting your account is permanent. All your saved items,
                    history, and preferences will be erased and cannot be
                    recovered.
                </div>

                <button type="submit" className="danger-btn">
                    Delete account
                </button>
            </form>
        </div>
    );
}
