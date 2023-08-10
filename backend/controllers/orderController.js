const Order = require("../models/orderModel");
const User = require("../models/userModel");

const getOrders = async (req, res) => {
  try {
    const allOrders = await Order.find();
    res.status(200).json(allOrders);
  } catch (error) {
    console.log(error);
  }
};

const postOrder = async (req, res) => {
  const {
    manufacturer,
    orderID,
    source,
    destination,
    quantity,
    pickup,
    transporter,
  } = req.body;

  try {
    const transport = await User.findOne({ name: transporter });
    const newOrder = await Order.create({
      manufacturer,
      orderID,
      source,
      destination,
      quantity,
      pickup,
      transporter: transport._id,
    });
    res.status(200).json(newOrder);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getOrders, postOrder };
