
import Chat from "../models/chat.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId } from "../socketio/server.js";
export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id; // current logged in user
        let conversation = await Chat.findOne({
            members: { $all: [senderId, receiverId] },
        });
        if (!conversation) {
            conversation = await Chat.create({
                members: [senderId, receiverId],
            });
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }
        // await conversation.save()
        // await newMessage.save();
        await Promise.all([conversation.save(), newMessage.save()]);
        const receiversocketId = getReceiverSocketId(receiverId);
        if (receiversocketId) {
            io.to(receiversocketId).emit("newMessage", newMessage);
        }
        res.status(201).json({ message: "message sent successfully", newMessage });
    } catch (error) {
        console.log("Error in sendMessage", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getMessage = async (req, res) => {
    try {
        const { id: chatUser } = req.params;
        const senderId = req.user._id; // current logged in user
        let conversation = await Chat.findOne({
            members: { $all: [senderId, chatUser] },
        }).populate("messages");
        if (!conversation) {
            return res.status(201).json({ message: "start a conversation" });
        }
        const messages = conversation.messages;
        res.status(201).json(messages);
    } catch (error) {
        console.log("Error in getMessage", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
