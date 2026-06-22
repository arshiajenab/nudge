import mongoose from "mongoose";

export default async function connectDB() {
    try {
        // Check if already connected (correct way to check readyState)
        if (mongoose.connection.readyState === 1) {
            console.log("Already connected to database");
            return true;
        }
        
        // Check if currently connecting
        if (mongoose.connection.readyState === 2) {
            console.log("Database is connecting...");
            return true;
        }
        
        // Connect to database
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to database✅");
        return true;
        
    } catch (err) {
        console.log("DB connection has error => ", err);
        return false;
    }
}