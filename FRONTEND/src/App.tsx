import 'antd/dist/antd.min.css';
import io, { Socket } from "socket.io-client";
import { useEffect, useState } from "react";
import Messages from './components/Messages';
import './css/App.css'
import MessageInput from './components/MessageInput';

const ENDPOINT = "http://localhost:3001/";

function App() {

  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io(ENDPOINT);
    setSocket(newSocket);
    return () => {
      newSocket.close();
    }
  }, []);


  return (
    <div className="App">
      <header className="app-header">
        React Chat
      </header>
      {socket ? (
        <div className="chat-container">
          <Messages socket={socket} />
          <MessageInput socket={socket} />
        </div>
      ) : (
        <div>Not Connected</div>
      )}
    </div>
  );
}

export default App;
