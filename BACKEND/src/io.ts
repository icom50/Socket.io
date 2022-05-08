import { Server, Socket } from 'socket.io';
import { v4 as uuidv4 } from 'uuid';


const sendMessage = (io: Server, Value: any) => {
    const message = {
        Id: uuidv4(),
        Value,
        Date: Date.now()
    };
    console.log({message});
    io.emit('message', message);
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