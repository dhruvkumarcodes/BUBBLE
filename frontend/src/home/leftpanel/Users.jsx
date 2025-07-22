import React from 'react'
import User from './User'
import useGetAllUsers from '../../context/userGetAllUsers.jsx';


export default function Users() {
    const [allUsers, loading] = useGetAllUsers();
    console.log(allUsers);
    return (
        <div className='max-h-[83vh] flex-dhruv overflow-y-auto'>
            {allUsers.map((user, index) => (
                <User key={index} user={user} />
            ))}

        </div>
    )
}
