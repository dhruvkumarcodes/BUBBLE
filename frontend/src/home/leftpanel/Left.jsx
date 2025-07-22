import React from 'react'
import Search from './Search'

import Users from './Users'
import Logout from './Logout'

export default function Left() {
    return (
        <div className='w-[30%] border border-black bg-black text-white'>
            <div><div className='flex justify-between'>
                <h1 className='font-bold text-2xl p-2 sm:pl-5 pl-1 duration-100'> MEETO</h1>
                <Logout />
            </div>
                <Search />
                <hr></hr>
                <Users></Users>
            </div>

        </div>
    )
}
