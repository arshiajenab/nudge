"use client";
import { links } from "@/utils/modes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PanelLayout({}) {
    const pathname = usePathname();
    const [user, setUser] = useState(null);
    useEffect(() => {
        const getMe = async () => {
            try {
                const res = await fetch("/api/me");
                if (!res.ok) return;

                const data = await res.json();
                setUser(data);
            } catch (err) {
                console.log(err);
            }
        };

        getMe();
    }, []);
    
    return (
        <>
            <aside className="sidebar">
                <div className="sidebar-section-label">discover</div>
                <Link
                    href={"/panel/music"}
                    className={`sidebar-item s-purple ${pathname == links.music ? "active" : ""}`}
                >
                    <span>🎵</span> Music
                </Link>
                <Link
                    href={"/panel/game"}
                    className={`sidebar-item s-pink ${pathname == links.game ? "active" : ""}`}
                >
                    <span>🎮</span> Games
                </Link>
                <div className="sidebar-section-label">library</div>
                <Link
                    href={"/panel"}
                    className={`sidebar-item s-amber ${pathname == links.overview ? "active" : ""}`}
                >
                    <span>🏠</span>
                    Overview
                </Link>
                <Link
                    href={"/panel/saved"}
                    className={`sidebar-item s-neutral ${pathname == links.saved ? "active" : ""}`}
                >
                    <span>🔖</span> Saved
                </Link>
                <div className="sidebar-section-label">account</div>
                <Link
                    href={"/panel/settings"}
                    className={`sidebar-item ${pathname == links.settings ? "active" : ""}`}
                >
                    <span>⚙️</span> Settings
                </Link>
                <div className="sidebar-bottom">
                    <div className="user-chip">
                        <div className="user-avatar">{user?.name.slice(0,2).toUpperCase()}</div>
                        <div>
                            <div className="user-name">{user?.name}</div>
                            <div className="user-plan">free plan</div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}
