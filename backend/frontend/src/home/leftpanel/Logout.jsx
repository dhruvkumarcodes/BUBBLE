import React, { useState } from 'react'
import { MdDragHandle } from 'react-icons/md'
import axios from "axios";
import Cookies from "js-cookie";
import toast from 'react-hot-toast';

export default function Logout() {
    const [loading, setloading] = useState(false);
    const handlelogout = async () => {
        console.log("logout button clicked");
        setloading(true);
        try {
            const res = await axios.post("api/user/logout");
            localStorage.removeItem("messenger");
            Cookies.remove("jwt");
            setloading(false);
            toast.success("logout successfully")
            window.location.reload();
        } catch (error) {
            console.log("error in logout")
            toast.error("logout failed");
        }
    }
    return (
        <div>
            <button type="button" onClick={handlelogout} className='mt-3 font-xl bg-slate-500 border-[1px] border-slate-300 rounded-md hover:text-red-500 hover:bg-slate-50 duration-150 mr-10 sm:w-20'>
                Logout
            </button>
        </div>
    )
}
