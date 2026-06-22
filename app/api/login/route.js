// ROUTE --> api/register
import { NextResponse as res } from "next/server";
import User from "@/models/User";
import { validateEmail, validatePassword } from "@/utils/validations";
import connectDB from "@/lib/db";
import {
    generateAccessToken,
    hashPassword,
    verifyPassword,
} from "@/utils/auth";
import { cookies } from "next/headers";
export async function POST(req) {
    try {
        const { email, password } = await req.json();

        // validation
        if (!validateEmail(email)) {
            return res.json({ error: "Email is invalid" }, { status: 400 });
        }
        if (!validatePassword(password)) {
            return res.json({ error: "Password is invalid" }, { status: 400 });
        }

        await connectDB();
        const newEmail = email.toLowerCase()
        console.log(newEmail);
        
        // check if user already exists
        const user = await User.findOne({ email: newEmail });
        if (!user) {
            return res.json({ error: "there's no such user" }, { status: 404 });
        }
        const isPassCorrect = await verifyPassword(password, user.password);
        if (!isPassCorrect) {
            return res.json({ error: "invalid credentials" }, {status:400});
        }

        const accessToken = generateAccessToken({ email:newEmail });
        const cookieStore = await cookies();
        const cookie = cookieStore.set("token", accessToken, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 30,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            sameSite: "lax",
        });
        console.log(cookie);

        return res.json(
            { message: "Account created successfully" },
            { status: 201 },
        );
    } catch (err) {
        return res.json({ error: err }, { status: 500 });
    }
}
