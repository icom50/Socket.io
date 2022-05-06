import cors from 'cors';
import express, { Application } from 'express';
import favicon from 'serve-favicon';


const app: Application = express();
const port: string | number = 3000;

app
  // .use(express.static('public'))
  .use(favicon(__dirname + '/public/favIcon.png'))

  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(cors());


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => {
  console.log("Server listening on PORT", port);
})