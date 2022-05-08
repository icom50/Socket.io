import React, { useEffect, useState } from 'react';
import { Socket } from "socket.io-client";
import '../css/Messages.css';
import { IMessage } from '../../models/IMessage';

interface MessagesProps {
    socket: Socket;
}

const Messages: React.FC<MessagesProps> = ({ socket }) => {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [newMessage, setnewMessage] = useState<IMessage>({} as IMessage);

    useEffect(() => {
        socket.on('message', (msg: IMessage) => {
            setnewMessage(msg);
        });
    }, []);

    useEffect(() => {
        if (newMessage && newMessage.Id) {
            const newMessages = [...messages];
            newMessages.push(newMessage);
            setMessages(newMessages);
        }
    }, [newMessage])


    return (
        <div className="message-list">
            {messages.map((message: IMessage, index: number) => (
                <div
                    key={index}
                    className="message-container"
                    title={`Sent at ${new Date(message.Date).toLocaleTimeString()}`}
                >
                    <span className="message">{message.Value}</span>
                    <span className="date">{new Date(message.Date).toLocaleTimeString()}</span>
                </div>
            ))
            }
        </div>
    );
}
export default Messages;