import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        receiverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        message: {
            type: String,
            required: true,
            maxlength: 1000,
            validate: [{
                validator: (value) => value.length > 0,
                message: "message cant be empty",
            }
            ],
        },
        createdAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

const Message = mongoose.model("message", messageSchema);

export default Message;