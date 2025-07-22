
import React, { useEffect } from "react";
import { useSocketContext } from "./SocketContext.jsx";
import notify from "../assets/notify.wav";
import useConversation from "../statemanagement/useConversation.js";
const useGetSocketMessage = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        socket.on("newMessage", (newMessage) => {
            const sound = new Audio(notify);
            sound.play();

            setMessages((messages) => [...messages, newMessage]);
        });
        return () => {
            socket.off("newMessage");
        };
    }, [socket, messages, setMessages]);
};
export default useGetSocketMessage;
