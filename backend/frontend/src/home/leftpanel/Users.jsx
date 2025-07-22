import React from 'react'
import useGetAllUsers from '../../context/userGetAllUsers.jsx';
import User from './user.jsx';


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
