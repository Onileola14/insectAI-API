const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const uploadImage = async (file) => {
  const result = await cloudinary.uploader.upload(file.tempFilePath, {
    folder: "insect-ai",
    use_filename: true,
  });
  fs.unlinkSync(file.tempFilePath);
  return result.secure_url;
};

module.exports = uploadImage;
