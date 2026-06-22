import mongoose from "mongoose";
import UserModel from "@/models/User";

const GameSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
    },
    studio: {
        type: String,
    },
    genre: {
        type: String,
    },
    supported: {
        type: String,
    },
    reason: {
        type: String,
    },
    tag: {
        type: String,
    },
    tag2: {
        type: String,
    },
    category: {
        type: String,
    },
});

export default mongoose.models.Game || mongoose.model("Game", GameSchema);
