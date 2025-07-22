
import mongoose from "mongoose";
import User from "../models/user.model.js";
import Message from "./message.model.js";
const chatSchema = new mongoose.Schema(
    {
        members: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: User,
            },
        ],
        messages: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: Message,
                default: [],
            },
        ],
    },
    { timestamps: true }
);

const Chat = mongoose.model("conversation", chatSchema);
export default Chat;
