

const cloudinary = require('cloudinary').v2;
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY, // Updated key for clarity
    api_secret: process.env.CLOUD_API_SECRET, // Updated key for clarity
});

// Log the configuration status (optional, for debugging in development)
if (process.env.NODE_ENV !== "production") {
    console.log("Cloudinary configured with Cloud Name:", process.env.CLOUD_NAME);
}

// Export Cloudinary instance for use in the application
module.exports = cloudinary;
