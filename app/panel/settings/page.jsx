import Account from "@/components/ui/pages/settings/Account";
import Notifications from "@/components/ui/pages/settings/Notifications";
import Preferences from "@/components/ui/pages/settings/Preferences";
import Profile from "@/components/ui/pages/settings/Profile";
import { tabs } from "@/utils/modes";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function page({ searchParams }) {
    const { tab } = await searchParams;
    return (
        <div id="settings" className="dash-section">
            <div className="page-header">
                <h2>Settings ⚙️</h2>
                <p>Manage your account and preferences.</p>
            </div>

            <div className="settings-layout">
                <div className="settings-nav">
                    <Link
                        href={"/panel/settings?tab=profile"}
                        className={`settings-nav-item ${tab == tabs.profile ? "active" : ""}`}
                    >
                        👤 Profile
                    </Link>
                    <Link
                        href={"/panel/settings?tab=account"}
                        className={`settings-nav-item ${tab == tabs.account ? "active" : ""}`}
                    >
                        🔐 Account
                    </Link>
                </div>

                <div>
                    {tab == tabs.profile ? (
                        <Profile />
                    ) : tab == tabs.account ? (
                        <Account />
                    ) : (
                        redirect("/panel/settings?tab=profile")
                    )}
                </div>
            </div>
        </div>
    );
}
