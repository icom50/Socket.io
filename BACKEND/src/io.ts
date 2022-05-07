import { Server, Socket } from 'socket.io';
import { v4 as uuidv4 } from 'uuid';

// const getMessages = (socket: Socket) => {
//     console.log(messages);
//     messages.forEach((message) => sendMessage(socket, message));
// }

const sendMessage = (io: Server, message: any) => {
    io.emit('message', message);
}

const handleMessage = (io: Server, Value: any) => {
    const message = {
        Id: uuidv4(),
        Value,
        Date: Date.now()
    };
    sendMessage(io, message);
}

export const chat = (io: Server) => {
    io.on('connection', (socket: Socket) => {
        console.log('User connected')
        // socket.on('getMessages', () => getMessages(socket));
        socket.on('message', (Value) => handleMessage(io, Value));
        socket.on('connect_error', (err) => {
            console.log(`connect_error due to ${err.message}`);
        });
    });
};