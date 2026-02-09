const express = require("express");
const router = express.Router();
const identify  = require("../controllers/insectController");

router.route("/upload").post(identify);

module.exports = router;
