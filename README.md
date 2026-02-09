
---

# 🐞 Insect AI Identification API

An AI-powered backend application that identifies insects from uploaded images and provides detailed, verified information about the insect, including affected plants or humans and recommended control methods.

Built with **Node.js**, **Express**, **MongoDB**, **Cloudinary**, and **OpenAI Vision**.

---

## 🚀 Features

* Upload insect images
* Store images securely on Cloudinary
* Identify insects using OpenAI Vision
* Retrieve verified insect data from MongoDB
* Provide:

  * Insect name & scientific name
  * Affected crops or humans
  * Symptoms and damage
  * Organic & chemical control methods
* Clean, scalable backend architecture

---

## 🧠 How It Works

```
Client uploads image
        ↓
Express server receives image
        ↓
Image uploaded to Cloudinary
        ↓
Cloudinary image URL sent to OpenAI Vision
        ↓
AI identifies insect
        ↓
MongoDB returns verified insect information
        ↓
API responds with full insect details
```

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **Cloudinary**
* **OpenAI API (Vision)**
* **express-fileupload**
* **dotenv**

---

## 📁 Project Structure

```
insect-ai-api/
│
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── cloudinary.js
│   │
│   ├── models/
│   │   └── insectModel.js
│   │
│   ├── services/
│   │   ├── uploadService.js
│   │   ├── aiService.js
│   │   └── insectService.js
│   │
│   ├── controllers/
│   │   └── insectController.js
│   │
│   ├── routes/
│   │   └── insectRoutes.js
│   │
│   └── app.js
│
├── server.js
├── .env
└── README.md
```

---

## 📦 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Onileola14/insectAI-API.git
cd insect-ai-api
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_secret

OPENAI_API_KEY=your_openai_api_key
```

⚠️ **Never expose your API keys or commit `.env` to GitHub**

---

## ▶️ Running the Server

### Development mode

```bash
npm run dev
```

### Production mode

```bash
npm start
```

Server runs on:

```
http://localhost:5000
```

---

## 📡 API Endpoints

### 🔍 Identify Insect

**POST** `/api/insects/identify`

**Request (form-data):**

* `image` → insect image file

**Response:**

```json
{
  "image": "https://res.cloudinary.com/...",
  "identified_as": {
    "name": "Fall Armyworm",
    "scientific_name": "Spodoptera frugiperda"
  },
  "details": {
    "affects": ["plant"],
    "host_plants": ["Maize", "Sorghum"],
    "symptoms": ["Leaf damage", "Defoliation"],
    "organic_control": ["Neem extract"],
    "chemical_control": ["Emamectin benzoate"]
  }
}
```

---

## 🧪 Example Use Cases

* Agricultural pest identification
* Farmer advisory systems
* Research and extension services
* Educational tools for agriculture students

---

## ⚠️ Important Notes

* OpenAI API requires **billing enabled**
* ChatGPT subscription ≠ OpenAI API access
* AI is used **only for identification**
* Agricultural recommendations come from **verified database records**

---

## 🔒 Security Best Practices

* API keys stored in environment variables
* AI logic isolated in service layer
* Cloudinary prevents local file storage
* Easy to swap AI provider if needed

---

## 🔮 Future Improvements

* Confidence score for AI predictions
* Multiple insect predictions
* User scan history
* Geo-based pest alerts
* Offline insect database
* Custom trained insect model

---

## 👨‍💻 Author

**Salami Tunde Onileola**
Agriculture (Crop Protection) | Backend Developer (Node.js)

---

# insectAI-API
