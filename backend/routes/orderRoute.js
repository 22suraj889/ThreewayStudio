const express = require("express");
const router = express.Router();
const { getOrders, postOrder } = require("../controllers/orderController");
const auth = require("../middlewares/auth");
router.get("/", auth, getOrders);
router.post("/", auth, postOrder);

module.exports = router;
