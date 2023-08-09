const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./mongoDB");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoute");
const orderRoutes = require("./routes/orderRoute");
const chatRoutes = require("./routes/chatRoute");
const messageRoutes = require("./routes/messageRoutes");
const app = express();
connectDB();

dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/users", userRoutes);
app.use("/orders", orderRoutes);
app.use("/chats", chatRoutes);
app.use("/message", messageRoutes);
app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(PORT, () => {
  console.log("Server running on port 5000");
});
