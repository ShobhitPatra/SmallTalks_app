import Conversation from "../../models/conversation.model.js";
import Message from "../../models/message.model.js";

const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    res.status(201).json({
      newMessage,
    });
  } catch (error) {
    console.log("error in send message controller", error.message);
    res.status(401).json({
      error: error.message,
    });
  }
};

export default sendMessage;
