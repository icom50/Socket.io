import MessageInput from "./MessageInput";
import Messages from "./Messages";
import '../../css/Chat.css'
import { useContext } from "react";
import { AppContext } from "../../contexts/appContext";


const Chat: React.FC = () => {

    const { state, dispatch } = useContext(AppContext);

    return (
        <div className="App">
            <header className="app-header">
                React Chat
            </header>
            {state.Socket ? (
                <div className="chat-container">
                    <Messages socket={state.Socket} />
                    <MessageInput socket={state.Socket} />
                </div>
            ) : (
                <div>Not Connected</div>
            )}
        </div>
    );
}

export default Chat;