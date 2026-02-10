require("dotenv").config();
require("express-async-errors");
const fileupload = require("express-fileupload");
const connectDB = require("./db/connectDB");
const insectRoutes = require("./routes/insectRoutes");
const notFound = require("./middlewares/notfound");
const errorHandler = require("./middlewares/errorhandler");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const express = require("express");
const app = express();
app.use(fileupload({ useTempFiles: true }));

app.use("/api/v1/insect", insectRoutes);
app.get("/", (req, res) => {
  res.send("insect AI");
  res.end();
});

app.use(notFound);
app.use(errorHandler);

const port = 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`server listenning to port ${port} ...`),
    );
  } catch (error) {}
};

start();
