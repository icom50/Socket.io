import MessageInput from "./MessageInput";
import Messages from "./Messages";
import '../../css/Chat.css'
import { useContext } from "react";
import { AppContext } from "../../contexts/appContext";


const Chat: React.FC = () => {

    const { state } = useContext(AppContext);

    return (
        <div className="App">
            <header className="app-header">
                React Chat
            </header>
            {state.Socket.connected ? (
                <div className="chat-container">
                    <Messages />
                    <MessageInput />
                </div>
            ) : (
                <div>Not Connected</div>
            )}
        </div>
    );
}

export default Chat;