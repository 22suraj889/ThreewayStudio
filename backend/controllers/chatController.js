const { mongo, default: mongoose } = require("mongoose");
const Chat = require("../models/chatModel");

const accessChat = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.log("User id is wrong");
    return res.status(400).json({ message: "User id is wrong" });
  }

  var isChat = await Chat.find({
    $and: [
      { users: { $elemMatch: { $eq: req.userId } } },
      { users: { $elemMatch: { $eq: id } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");

  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    const chatData = {
      chatName: "sender",
      users: [id, req.userId],
    };

    try {
      const createChat = await Chat.create(chatData);
      const fullChat = await Chat.find({ _id: createChat._id }).populate(
        "users",
        "-password"
      );

      res.status(200).send(fullChat);
    } catch (error) {
      console.log(error);
    }
  }
};

const fetchChats = async (req, res) => {
  try {
    const results = await Chat.find({
      users: { $elemMatch: { $eq: req.userId } },
    })
      .populate("users", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 });

    res.status(200).send(results);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { accessChat, fetchChats };
