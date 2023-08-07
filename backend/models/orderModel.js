const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  manufacturer: { type: String, required: true },
  orderID: { type: String, required: true },
  source: { type: String, required: true },
  destination: { type: String, required: true },
  quantity: { type: Number, required: true, min: 1, max: 5 },
  pickup: { type: String, required: true },
  transporter: { type: String, required: true },
});

module.exports = mongoose.model("Order", orderSchema);
