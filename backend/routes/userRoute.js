const express = require("express");
const router = express.Router();
const { login, register, getUsers } = require("../controllers/userController");

router.post("/login", login);
router.post("/register", register);
router.get("/", getUsers);

module.exports = router;
