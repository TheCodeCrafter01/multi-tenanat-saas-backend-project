const dns = require("node:dns");
const mongoose = require("mongoose");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

function connectDB() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("database connected");
        })
        .catch((err) => {
            console.error("Database connection error:", err.message);
            console.log("Continuing without database...");
        });
}

module.exports = connectDB;