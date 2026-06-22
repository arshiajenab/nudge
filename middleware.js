import { NextResponse } from "next/server";
import { jwtVerify } from "jose"; // lightweight, Edge-compatible JWT lib

export async function middleware(request) {
    console.log("hello");
    const token = request.cookies.get("token")?.value;

    if (!token) {
        
        return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
        await jwtVerify(
            token,
            new TextEncoder().encode(process.env.AccessTokenSecretKey),
        );
        return NextResponse.next();
    } catch {
        return NextResponse.redirect(new URL("/login", request.url));
    }
}

export const config = {
    matcher: ["/panel/:path*"],
};
