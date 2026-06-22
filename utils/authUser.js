import { cookies } from "next/headers";
import UserModel from "@/models/User";
import { verifyAccessToken } from "./auth";
import connectDB from "@/lib/db";

const authUser = async () => {
    await connectDB();
    const cookieStore = await cookies();
    const token = cookieStore.get('token');
    
    let user = null;

    if (token) {
        const tokenPayload = verifyAccessToken(token.value);
        console.log(tokenPayload);
        
        if (tokenPayload) {
            user = await UserModel.findOne({ email: tokenPayload.email });
        }
        
    }
    return user;
};

export { authUser };
