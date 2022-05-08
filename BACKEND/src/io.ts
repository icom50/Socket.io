import { Server, Socket } from 'socket.io';
import { v4 as uuidv4 } from 'uuid';


const sendMessage = (io: Server, message: any) => {
    console.log({message});
    const messageRetrieved = {
        Id: uuidv4(),
        Value: message.Value,
        User: message.User,
        Date: Date.now()
    };
    console.log({message});
    io.emit('message', messageRetrieved);
}

export const chat = (io: Server) => {
    io.on('connection', (socket: Socket) => {
        console.log('User connected')
        socket.on('message', (Value) => sendMessage(io, Value));
        socket.on('disconnect', () => {
            console.log('user disconnected');
          });
        socket.on('connect_error', (err) => {
            console.log(`connect_error due to ${err.message}`);
        });
    });
};