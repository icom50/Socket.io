import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../contexts/appContext';
import '../../css/Messages.css';
import { IMessage } from '../../models/IMessage';


const Messages: React.FC = () => {
    const { state } = useContext(AppContext);

    const [messages, setMessages] = useState<IMessage[]>([]);
    const [newMessage, setnewMessage] = useState<IMessage>({} as IMessage);

    useEffect(() => {
        state.Socket.on('message', (msg: IMessage) => {
            console.log(msg)
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
                    <span className="user">{message.User.Name}:</span>
                    <span className="message">{message.Value}</span>
                    <span className="date">{new Date(message.Date).toLocaleTimeString()}</span>
                </div>
            ))
            }
        </div>
    );
}
export default Messages;