const express = require("express");
const auth = require("../middlewares/auth");
const {
  sendMessage,
  allMessages,
} = require("../controllers/messageController");
const router = express.Router();

router.post("/", auth, sendMessage);
router.get("/:chatID", auth, allMessages);

module.exports = router;
