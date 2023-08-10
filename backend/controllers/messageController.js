const Message = require("../models/messageModel");
const User = require("../models/userModel");
const sendMessage = async (req, res) => {
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    console.log("Invalid ");
    return res.status(400);
  }

  try {
    let message = await Message.create({
      content,
      chat: chatId,
      sender: req.userId,
    });

    message = await message.populate("sender", "name");
    message = await message.populate("chat");
    message = await User.populate(message, {
      path: "chat.users",
      select: "name email",
    });
    res.status(200).send(message);
  } catch (error) {
    console.log(error);
  }
};

const allMessages = async (req, res) => {
  const { chatId } = req.params;
  try {
    const messages = await Message.find({ chat: chatId })
      .populate("sender", "name email")
      .populate("chat");

    console.log("Hi" + messages);
    res.status(200).send(messages);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sendMessage, allMessages };
