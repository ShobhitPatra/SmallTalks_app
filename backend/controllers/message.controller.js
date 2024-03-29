import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
        messages: [],
      });
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      messages: message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
      console.log("mesg pushed");
    }

    // await Promise.all(conversation.save(), newMessage.save());
    await conversation.save();
    await newMessage.save();

    res.status(201).json({
      newMessage,
    });
  } catch (error) {
    console.log("error in send message controller", error.message);
    res.status(401).json({
      error: "internal server error",
    });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderUserId = req.user;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderUserId, userToChatId] },
    }).populate("messages");

    if (!conversation) {
      return res.status(401).json([]);
    }

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log("error in getMessage controller", error.message);
    res.status(401).json({
      error: "internal server error",
    });
  }
};
