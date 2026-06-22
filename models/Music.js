import mongoose from "mongoose";
import UserModel from "@/models/User";

const MusicSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
    },
    artist: {
        type: String,
    },
    genre: {
        type: String,
    },
    year: {
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
    videoId: { type: String, default: null },
});

export default mongoose.models.Music || mongoose.model("Music", MusicSchema);
