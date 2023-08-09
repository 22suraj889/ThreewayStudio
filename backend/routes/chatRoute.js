const express = require("express");
const router = express.Router();
const { accessChat, fetchChats } = require("../controllers/chatController");
const auth = require("../middlewares/auth");

router.post("/:id", auth, accessChat);
router.get("/", auth, fetchChats);

module.exports = router;
