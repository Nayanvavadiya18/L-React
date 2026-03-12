const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Load env from backend directory
dotenv.config({ path: path.join(__dirname, 'backend', '.env') });

console.log("Testing MongoDB Connection...");
console.log("URI:", process.env.MONGO_URI ? "Defined (hidden)" : "Undefined");

if (!process.env.MONGO_URI) {
    console.error("❌ MONGO_URI is missing from .env");
    process.exit(1);
}

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB Connected Successfully!");
        process.exit(0);
    })
    .catch((err) => {
        console.error("❌ MongoDB Connection Failed:", err.message);
        process.exit(1);
    });
