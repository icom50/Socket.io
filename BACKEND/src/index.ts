import cors from 'cors';
import express, { Application } from 'express';
import favicon from 'serve-favicon';
import http from 'http';
import { Server, Socket } from 'socket.io';
import { chat } from './io'


const app: Application = express();
const port: string | number = 3001;

app
  .use(favicon(__dirname + '/public/favIcon.png'))

  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(cors({
    origin: "*"
  }));


const server: http.Server = http.createServer(app);
const io: Server = new Server(server, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"],
  }
});

app.get('/', (req, res) => {
  res.status(200).json('hello word');
});

chat(io);

server.listen(port, () => {
  console.log("Server listening on PORT", port);
});