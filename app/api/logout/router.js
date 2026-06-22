import { NextResponse } from "next/server";

export async function GET() {
    try {
        const token = cookieStore.get("token");
        if (!token)
            return NextResponse.json(
                { error: "Token does not exist" },
                { status: 404 },
            );
        cookieStore.delete("token");
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}
