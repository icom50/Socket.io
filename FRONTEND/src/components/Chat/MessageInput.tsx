import React, { useState } from 'react';
import '../css/MessageInput.css';
import { Socket } from "socket.io-client";

interface MessageInputProps {
    socket: Socket;
}

const MessageInput: React.FC<MessageInputProps> = ({ socket }) => {
    const [Value, setValue] = useState('');
    const submitForm = (e: any) => {
        e.preventDefault();
        socket.emit('message', Value);
        setValue('');
    };

    return (
        <form onSubmit={submitForm}>
            <input
                autoFocus
                value={Value}
                placeholder="Type your message"
                onChange={(e) => {
                    setValue(e.currentTarget.value);
                }}
            />
        </form>
    );
};

export default MessageInput;