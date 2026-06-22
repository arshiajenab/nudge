import connectDB from "@/lib/db";
import User from "@/models/User";
import { authUser } from "@/utils/authUser";
import { refresh } from "next/cache";

export default async function Profile() {
    const user = await authUser()
    const changeUser = async (formData) => {
        "use server";
        const name = formData.get("name");
        await connectDB()
        await User.findByIdAndUpdate(user._id, { name }, { new: true });
        refresh()
    };
    return (
        <form action={changeUser} id="s-profile" className="settings-section active">
            <div className="settings-group">
                <div className="profile-avatar-row">
                    <div className="profile-avatar-big">
                        {user?.name.slice(0, 2).toUpperCase()}
                    </div>

                    <div>
                        <div
                            style={{
                                fontSize: "15px",
                                fontWeight: 700,
                                marginBottom: "4px",
                            }}
                        >
                            {user?.name}
                        </div>

                        <div
                            style={{
                                fontSize: "13px",
                                color: "var(--muted)",
                                fontFamily: "var(--mono)",
                            }}
                        >
                            {user?.email}
                        </div>
                    </div>
                </div>

                <div className="settings-row">
                    <div className="settings-row-info">
                        <div className="sr-title">Display name</div>
                        <div className="sr-desc">Shown on your dashboard</div>
                    </div>
                    <input
                        className="settings-input"
                        defaultValue={user?.name}
                        name="name"
                    />
                </div>

                <div className="settings-row">
                    <div className="settings-row-info">
                        <div className="sr-title">Email address</div>
                        <div className="sr-desc">Used for sign in</div>
                    </div>
                    <input
                        disabled
                        value={user?.email}
                        className="settings-input"
                    />
                </div>
            </div>

            <button type="submit" className="save-settings-btn">Save changes</button>
        </form>
    );
}
