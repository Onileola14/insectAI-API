// const axios = require("axios");

 

//  const identifyInsect = async (imageUrl) => {
  

//     // 1️⃣ download image as buffer
//     const imageResponse = await axios.get(imageUrl, {
//       responseType: "arraybuffer",
//     });

//     // 2️⃣ send buffer to HuggingFace
//     const response = await axios.post(
//       "https://api-inference.huggingface.co/models/google/vit-base-patch16-224",
//       imageResponse.data,
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
//           "Content-Type": "application/octet-stream",
//         },
//       }
//     );

//     const result = response.data;

//     return {
//       name: result[0]?.label || "Unknown insect",
//       confidence: result[0]?.score || 0,
//     };

  
// };


// module.exports = identifyInsect





const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const identifyInsect = async (imageUrl) => {
  const response = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: [
      {
        role: "user",
        content: [
          {
            type: "input_text",
            text: `
Identify the insect in this image.
Return only JSON:

{
  "name": "",
  "scientific_name": ""
}
`,
          },
          {
            type: "input_image",
            image_url: imageUrl,
          },
        ],
      },
    ],
  });

  return JSON.parse(response.output_text);
};

module.exports = identifyInsect;
