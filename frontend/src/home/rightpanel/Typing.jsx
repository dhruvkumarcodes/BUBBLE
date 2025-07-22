import React, { useState } from 'react'
import { IoMdSend } from "react-icons/io";
import useSendMessage from '../../context/useSendMessage';
export default function Typing() {
    const { loading, sendMessages } = useSendMessage();
    const [message, setMessages] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        await sendMessages(message);
        setMessages("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='flex ml-4'>
                <input type="text" placeholder="Message" value={message} onChange={(e) => {
                    setMessages(e.target.value);
                }} className="input w-[90%] bg-slate-800 h-[6vh] border border-slate-800 grow rounded-xl outline-none" />
                <button className='text-5xl w-[10%] '>
                    <IoMdSend />
                </button>
            </div>
        </form>
    )
}
