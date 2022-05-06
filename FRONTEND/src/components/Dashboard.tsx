import React, { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";
import { Input, List, Typography } from 'antd'

const ENDPOINT = "http://localhost:3001/";

const Dashboard: React.FC = () => {

    const [messages, setMessages] = useState<string[]>([]);
    const [message, setMessage] = useState<string>('');
    const socket = socketIOClient(ENDPOINT);

    socket.on('FromAPI', function (msg) {
        const messagesCloned = [...messages];
        messagesCloned.push(msg);
        setMessages(messagesCloned);
    });


    return (
        <div style={{ width: "800px" }}>
            <List
                header={<div>Messages</div>}
                bordered
                dataSource={messages}
                renderItem={item => (
                    <List.Item>
                        <Typography.Text mark>{item}</Typography.Text>
                    </List.Item>
                )}
            />
            <Input
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onPressEnter={(event) => {
                    if (message.trim() !== "") {
                        socket.emit('FromAPI', message);
                        setMessage('');
                    }

                }} />
        </div>
    )
}
export default Dashboard;