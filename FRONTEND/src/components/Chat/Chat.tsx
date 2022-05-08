import { Socket } from "socket.io-client";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import './css/Chat.css'


interface ChatProps {
    socket: Socket;
}

const Chat: React.FC<ChatProps> = ({ socket }) => {

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

export default Chat;