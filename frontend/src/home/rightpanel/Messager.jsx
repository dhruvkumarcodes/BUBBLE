import React from 'react'
import useConversation from '../../statemanagement/useConversation'
import User from '../leftpanel/user';
import { useSocketContext } from '../../context/SocketContext';

export default function Messager() {
    const { selectedConversation } = useConversation();
    const { socket, onlineUsers } = useSocketContext();
    const getOnlineStatus = (userId) => {
        return onlineUsers.includes(userId) ? "online" : "offline";
    }
    return (
        <div className='flex pt-3 pl-3 hover:bg-slate-400 cursor-pointer duration-200 h-[10vh]'>
            <div className={"avatar online"}>
                <div className="w-16 h-16 rounded-full">
                    <img src="https://imgs.search.brave.com/jHDp_R14w-tbRDiYsyiOCGDeCSPE4WqsVfFwiXVDyow/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzExLzY4LzUwLzU3/LzM2MF9GXzExNjg1/MDU3OTRfSUJDRWlh/ZnNJckhGSjA5ZTY1/UDJ2aDUxMTVDMVhJ/N2UuanBn" />
                </div>
            </div>
            <div className='pl-6 pt-2'>
                <h1 className='text-xl font-semibold'>{selectedConversation.fullname}</h1>
                <h2>{getOnlineStatus(selectedConversation._id)}</h2>
            </div>
        </div>
    )
}
