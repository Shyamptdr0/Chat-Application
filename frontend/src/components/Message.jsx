import React, { useEffect, useRef } from 'react';
import { useSelector } from "react-redux";

const Message = ({ message, prevMessage }) => {
    const scroll = useRef();
    const { authUser, selectedUser } = useSelector(store => store.user);

    const formatTime = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const today = new Date();
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);

        if (date.toDateString() === today.toDateString()) return "Today";
        if (date.toDateString() === yesterday.toDateString()) return "Yesterday";
        return date.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });
    };

    const shouldShowDateBanner = !prevMessage || 
        new Date(prevMessage?.createdAt).toDateString() !== new Date(message?.createdAt).toDateString();

    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    return (
        <>
            {shouldShowDateBanner && (
                <div className="date-banner my-4 text-center text-sm font-semibold text-gray-500">
                    {formatDate(message?.createdAt || new Date())}
                </div>
            )}
            <div ref={scroll} className={`chat ${message?.senderId === authUser?._id ? 'chat-end' : 'chat-start'}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img 
                            alt="User avatar" 
                            src={message?.senderId === authUser?._id 
                                ? authUser?.profilePhoto  
                                : selectedUser?.profilePhoto 
                            } 
                        />
                    </div>
                </div>
                <div className="chat-header">
                    <time className="text-xs opacity-50 text-white">
                        {formatTime(message?.createdAt || new Date())}
                    </time>
                </div>
                <div className={`chat-bubble ${message?.senderId !== authUser?._id ? 'bg-gray-200 text-black' : ''} `}>
                    {message?.message}
                </div>
            </div>
        </>
    );
};

export default Message;
