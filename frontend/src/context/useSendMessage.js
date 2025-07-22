
import React, { useState } from "react";

import axios from "axios";
import useConversation from "../statemanagement/useConversation.js";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
    const sendMessages = async (message) => {
        setLoading(true);
        try {
            const res = await axios.post(
                `/api/message/send/${selectedConversation._id}`,
                { message }
            );
            setMessages([...messages, res.data.newMessage]);
            socket.emit("sendMessage", {
                message: res.data.newMessage,
                receiverId: selectedConversation._id,
            });
            setLoading(false);
        } catch (error) {
            console.log("Error in sending messages", error);
            setLoading(false);
        }
    };
    return { loading, sendMessages };
};

export default useSendMessage;
