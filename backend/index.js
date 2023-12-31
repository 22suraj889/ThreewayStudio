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
const server = app.listen(PORT, () => {
  console.log("Server running on port 5000");
});

const io = require("socket.io")(server, {
  pingTimeout: 6000,
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("connection to socket.io");

  socket.on("setup", (userData) => {
    socket.join(userData?._id);
    console.log(userData?._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Room " + room);
  });

  socket.on("new message", (newMessageReceived) => {
    let chat = newMessageReceived.chat;
    if (!chat.users) return console.log("chat users not defined");

    chat.users.forEach((user) => {
      if (user.id === newMessageReceived.sender._id) return;

      socket.in(user._id).emit("message recieved", newMessageReceived);
    });
  });
});
