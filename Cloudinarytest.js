// require("dotenv").config();
// const cloudinary = require("cloudinary").v2;

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_API_SECRET,
// });

// async function uploadTest() {
//   try {
//     const result = await cloudinary.uploader.upload(
//       "https://res.cloudinary.com/demo/image/upload/sample.jpg",
//       {
//         folder: "test_uploads",
//       }
//     );
//     console.log("✅ Upload successful!");
//     console.log(result.secure_url);
//   } catch (error) {
//     console.error("❌ Upload failed:", error.message);
//   }
// }

// uploadTest();
const cloudinary = require("cloudinary").v2;


if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  console.error("❌ Missing Cloudinary environment variables");
} else {
  console.log("✅ Cloudinary env variables loaded successfully");
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = cloudinary;
