import "./globals.css";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import Nav from "../components/modules/nav";
import NextTopLoader from "nextjs-toploader";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import SessionProvider from "@/components/layouts/SessionProvider";
import { Toaster } from "react-hot-toast";

const SpaceGrotesk = Space_Grotesk({
    variable: "--font",
    weight: ["300", "400", "500", "600", "700"],
});
const SpaceMono = Space_Mono({
    variable: "--mono",
    weight: ["400", "700"],
});
export const metadata = {
    title: "Nudge | Your AI Assistant",
    description:
        "Nudge is a platform using AI help you find Music, Games and ofcourse helping you review your Code",
};

export default async function RootLayout({ children }) {
    const session = await getServerSession(authOptions);
    return (
        <html
            lang="en"
            className={`${SpaceGrotesk.variable} ${SpaceMono.variable}`}
        >
            <body>
                <SessionProvider session={session}>
                    <Nav />
                    <Toaster
                        toastOptions={{
                            className: "",
                            iconTheme:{
                                primary: "#978AFF"
                            },
                            style: {
                                backgroundColor: "#0B0B18",
                                color: "#fff",
                            },
                        }}
                    />
                    <NextTopLoader color="#7c6fff" shadow="0 0 10px #7c6fff" />
                    <div className="bg-layer">
                        <div className="orb orb-1"></div>
                        <div className="orb orb-2"></div>
                        <div className="orb orb-3"></div>
                        <div className="dot-grid"></div>
                        <div className="grain"></div>
                    </div>
                    <div className="children1">{children}</div>
                </SessionProvider>
            </body>
        </html>
    );
}
