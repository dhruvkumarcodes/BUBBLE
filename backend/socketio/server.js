
import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "https://bubble-aakb.onrender.com",
        methods: ["GET", "POST"],
    },
});


export const getReceiverSocketId = (receiverId) => {
    return users[receiverId];
};

const users = {};


io.on("connection", (socket) => {
    console.log("a user connected", socket.id);
    const userId = socket.handshake.query.userId;
    if (userId) {
        users[userId] = socket.id;
        console.log("Hello ", users);
    }

    io.emit("getOnlineUsers", Object.keys(users));
    socket.on("sendMessage", ({ message, receiverId }) => {
        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", message);
        }
    });


    socket.on("disconnect", () => {
        console.log("a user disconnected", socket.id);
        delete users[userId];
        io.emit("getOnlineUsers", Object.keys(users));
    });
});

export { app, io, server };
