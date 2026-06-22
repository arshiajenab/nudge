import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { query } = await req.json();

        if (!query) {
            return NextResponse.json(
                { error: "Query is required" },
                { status: 400 },
            );
        }

        const res = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(
                query,
            )}&type=video&key=${process.env.YOUTUBE_API_KEY}`,
        );

        const data = await res.json();
        const videoId = data.items?.[0]?.id?.videoId || null;

        return NextResponse.json({ videoId });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 },
        );
    }
}
