require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

async function uploadTest() {
  try {
    const result = await cloudinary.uploader.upload(
      "https://res.cloudinary.com/demo/image/upload/sample.jpg",
      {
        folder: "test_uploads",
      }
    );
    console.log("✅ Upload successful!");
    console.log(result.secure_url);
  } catch (error) {
    console.error("❌ Upload failed:", error.message);
  }
}

uploadTest();