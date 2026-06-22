import { verifyAccessToken } from "@/utils/auth";
import { cookies } from "next/headers";
import UserModel from "@/models/User";
import connectDB from "@/lib/db";

export async function GET(req) {
    await connectDB();
    const cookieStore = await cookies();
    const token = cookieStore.get("token");

    let user = null;

    if (token) {
        const tokenPayload = verifyAccessToken(token.value);
        if (tokenPayload) {
            user = await UserModel.findOne(
                { email: tokenPayload.email },
                "-password -__v",
            );
        }

        return Response.json(user);
    } else {
        return Response.json(
            {
                data: null,
                message: "Not access !!",
            },
            { status: 401 },
        );
    }
}
