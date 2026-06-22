import GlobalPlayer from "@/components/modules/GlobalPlayer";
import Sidebar from "@/components/modules/panel/Sidebar";
import { PlayerProvider } from "@/components/modules/PlayerContext";
import { authUser } from "@/utils/authUser";
import dynamic from "next/dynamic";
export default async function Layout({ children }) {
    // const user = await authUser();
    // if (!user) {
    //     redirect("/login");
    // }
    return (
        <PlayerProvider>
            <div className="page">
                <div className="dash-layout">
                    <Sidebar />
                    <main
                        style={{ paddingBottom: "90px" }}
                        className="dash-content"
                    >
                        {children}
                    </main>
                </div>
            </div>
            <div suppressHydrationWarning>
                <GlobalPlayer />
            </div>
        </PlayerProvider>
    );
}
