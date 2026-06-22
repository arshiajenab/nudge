import connectDB from "@/lib/db";
import { NextResponse } from "next/server";
import { authUser } from "@/utils/authUser";
import Music from "@/models/Music";

export async function POST(req) {
    try {
        await connectDB();
        const { res } = await req.json();
        const user = await authUser();
        const already = await Music.findOne({
            title: res.title,
            user: user._id,
        });
        if (already) {
            return NextResponse.json(
                { message: "already added" },
                { status: 201 },
            );
        }
        const saved = await Music.create({
            user: user._id,
            title: res.title,
            artist: res.artist,
            genre: res.genre,
            year: res.year,
            reason: res.reason,
            tag: res.tag,
            tag2: res.tag2,
            category: "music",
            videoId: res.videoId || null,
        });

        return NextResponse.json(
            { message: "Added Successfully" },
            { status: 201 },
        );
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            { success: false, error: err },
            { status: 500 },
        );
    }
}
export async function DELETE(req) {
    try {
        await connectDB();

        const { res } = await req.json();

        if (!res?._id) {
            return NextResponse.json(
                { message: "Missing id" },
                { status: 400 },
            );
        }

        await Music.findByIdAndDelete(res._id);

        return NextResponse.json(
            { message: "Removed Successfully" },
            { status: 200 },
        );
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            { success: false, error: err },
            { status: 500 },
        );
    }
}
