import React, { useState } from 'react'
import { MdOutlineSearch } from "react-icons/md";
import useConversation from '../../statemanagement/useConversation';
import userGetAllUsers from '../../context/userGetAllUsers';
import toast from 'react-hot-toast';
export default function Search() {
    const [search, setSearch] = useState("");
    const [allUsers] = userGetAllUsers();
    const { setSelectedConversation } = useConversation();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        const conversation = allUsers.find((user) =>
            user.fullname?.toLowerCase().includes(search.toLowerCase())
        );
        if (conversation) {
            setSelectedConversation(conversation);
            setSearch("");
        } else {
            toast.error("User not found");
        }
    };
    return (
        <div className='h-[10vh] w-full pt-0 p-5'>
            <form onSubmit={handleSubmit}>
                <div className='flex'>
                    <label className="border-[1px] bg-slate-800 p-3 flex border-gray-600 items-center rounded-md gap-2 w-[80%] mt-2">
                        <input type="text" className="w-14 md:grow outline-none bg-transparent" placeholder="Search" value={search} onChange={(e) => {
                            setSearch(e.target.value)
                        }} />
                    </label>
                    <button className='m-0.5'>
                        <MdOutlineSearch className='mt-2 text-5xl p-2  hover:bg-gray-300 rounded-full duration-300 ' />
                    </button>
                </div>
            </form>

        </div>
    )
}
