import connectDB from "@/lib/db";
import { NextResponse } from "next/server";
import { authUser } from "@/utils/authUser";
import Game from "@/models/Game";

export async function POST(req) {
    try {
        await connectDB();
        const { res } = await req.json();
        const user = await authUser();
        const already = await Game.findOne({
            title: res.title,
            user: user._id,
        });
        if (already) {
            return NextResponse.json(
                { message: "already added" },
                { status: 201 },
            );
        }
        const saved = await Game.create({
            user: user._id,
            title: res.title,
            studio: res.studio,
            genre: res.genre,
            supported: res.supported,
            reason: res.reason,
            tag: res.tag,
            tag2: res.tag2,
            category: "music",
        });

        return NextResponse.json(
            { message: "Added Successfully" },
            { status: 201 },
        );
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            { success: false, error: err.message },
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

        await Game.findByIdAndDelete(res._id);

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
