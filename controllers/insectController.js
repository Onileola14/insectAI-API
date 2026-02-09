const identifyInsect = require("../services/aiService");
const  getInsectDetails = require("../services/insectService");
const uploadImage = require("../services/uploadService");

const identify = async (req, res) => {
  if (!req.files || !req.files.image) {
    return res.status(400).json({
      message: "Please upload an image",
    });
  }

  // 1️⃣ Upload to Cloudinary
  const imageUrl = await uploadImage(req.files.image);

  // 2️⃣ AI identification
  const aiResult = await identifyInsect(imageUrl);

  // 3️⃣ Fetch verified data
  const insect = await getInsectDetails(aiResult.name);

  res.json({
    image: imageUrl,
    identified_as: aiResult,
    details: insect,
  });
};



module.exports = identify