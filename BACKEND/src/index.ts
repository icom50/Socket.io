import cors from 'cors';
import express, { Application } from 'express';
import favicon from 'serve-favicon';
import http from 'http';
import { Server, Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';


const app: Application = express();
const port: string | number = 3001;

app
  // .use(express.static('public'))
  .use(favicon(__dirname + '/public/favIcon.png'))

  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(cors());


const server: http.Server = http.createServer(app);
const io: Server = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket: Socket) => {
  console.log('a user connected');

  getApiAndEmit(socket);

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log("Server listening on PORT", port);
});

const getApiAndEmit = (socket: Socket) => {
  socket.on('FromAPI', (msg: string) => {
    // console.log('message: ' + msg);
    io.emit('FromAPI', msg);
  });
};