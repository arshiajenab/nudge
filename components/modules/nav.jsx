import { logout } from "@/actions/CrudAcc";
import { authUser } from "@/utils/authUser";
import Link from "next/link";
export default async function Nav() {
    const user = await authUser();
    return (
        <nav>
            <Link href={"/"} className="nav-logo">
                <div className="nav-logo-icon">✦</div>Nudge
            </Link>
            <div className="nav-links">
                <Link href={"/panel/game"} className="nav-link">
                    🎮 Games
                </Link>
                <Link href={"/panel"} className="nav-link">
                    Dashboard
                </Link>
                <Link href={"/panel/music"} className="nav-link">
                    🎵 Music
                </Link>
            </div>
            {user?.name ? (
                <form action={logout}>
                    <button className="nav-logout">Log Out👋</button>
                </form>
            ) : (
                <Link href={"/login"} className="nav-cta">
                    Sign in
                </Link>
            )}
        </nav>
    );
}
