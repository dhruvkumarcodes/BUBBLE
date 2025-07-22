import React, { useEffect } from 'react'
import Messager from './Messager'
import Messages from './Messages'
import Typing from './Typing'
import useConversation from '../../statemanagement/useConversation.js';
import Loading from '../../components/Loading';
import { useAuth } from '../../context/AuthProvider.jsx';

export default function Right() {
    const { selectedConversation, setSelectedConversation } = useConversation();
    useEffect(() => {
        return setSelectedConversation(null);
    }, [setSelectedConversation]);
    return (<>
        <div className='w-full bg-slate-700 text-white'>

            <div>
                {!selectedConversation ? (<Default />) : (<>
                    <Messager />
                    <div className='max-h-[83vh] flex-dhruv overflow-y-auto'>
                        <Messages />
                    </div>
                    <Typing />
                </>
                )}
            </div>
        </div>



    </>
    )
}

const Default = () => {
    const [authUser] = useAuth();
    return (
        <>
            <div className='flex flex-col h-screen items-center justify-center'>
                <h1 className=' text-center font-semibold'>Welcome to BUBBLE!</h1>

                <h1>Connect With People around the Globe.</h1>
                {authUser.name && <Default />}

            </div>
        </>
    )
}
