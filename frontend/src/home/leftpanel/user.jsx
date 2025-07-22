import React from 'react'
import useConversation from '../../statemanagement/useConversation.js'
import { useSocketContext } from '../../context/SocketContext.jsx';

export default function User({ user }) {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === user._id;
    const { socket, onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(user._id);
    return (
        <div className={`hover:bg-slate-600 duration-300 ${isSelected ? "bg-slate-700" : ""
            }`} onClick={() => setSelectedConversation(user)}
        >


            <div className='flex p-3 hover:bg-slate-400 duration-200 cursor-pointer'>
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className="w-16 h-16 rounded-full">
                        <img src="https://imgs.search.brave.com/jHDp_R14w-tbRDiYsyiOCGDeCSPE4WqsVfFwiXVDyow/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzExLzY4LzUwLzU3/LzM2MF9GXzExNjg1/MDU3OTRfSUJDRWlh/ZnNJckhGSjA5ZTY1/UDJ2aDUxMTVDMVhJ/N2UuanBn" />
                    </div>
                </div>
                <div className='pl-4 p-2'>
                    <h1 className='font-bold'>{user.fullname}</h1>
                    <h2>{user.email}</h2>
                </div>
            </div>
        </div>

    )
}
