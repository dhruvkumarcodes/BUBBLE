import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessage from '../../context/useGetMessage.js';
import Loading from '../../components/Loading.jsx';
import useGetSocketMessage from '../../context/useGetSocketMessage.jsx';
import useConversation from '../../statemanagement/useConversation.js';

export default function Messages() {
    const { loading } = useGetMessage();
    const { messages } = useConversation();
    useGetSocketMessage();
    console.log(messages);

    const lastMsgRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            if (lastMsgRef.current) {
                lastMsgRef.current.scrollIntoView({
                    behavior: "smooth",
                });
            }
        }, 100);
    }, [messages]);
    return (<>
        {loading ? (
            <Loading />
        ) : (
            messages.length > 0 ?
                messages.map((message) => (
                    <div key={message._id} ref={lastMsgRef}>
                        <Message message={message} />
                    </div>

                )) : (
                    <div>
                        <p className="text-center mt-[20%]">
                            Say! Hi to start the conversation
                        </p>
                    </div>
                )
        )}
        <div className='min-h-[83vh] '>
            {!loading && messages.length === 0 && (
                <div>
                    <p className="text-center mt-[20%]">
                        Say! Hi to start the conversation
                    </p>
                </div>
            )}
        </div>
    </>
    )
}
