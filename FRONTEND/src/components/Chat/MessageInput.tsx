import React, { useContext, useState } from 'react';
import { AppContext } from '../../contexts/appContext';
import '../../css/MessageInput.css';
import { IMessage } from '../../models/IMessage';


const MessageInput: React.FC = () => {
    const { state } = useContext(AppContext);

    const [Value, setValue] = useState('');
    const submitForm = (e: any) => {
        e.preventDefault();
        const message : IMessage = {
            Value: Value,
            User: state.CurrentUser
        } as IMessage
        state.Socket.emit('message', message);
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