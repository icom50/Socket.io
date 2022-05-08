import io from "socket.io-client";
import { useContext, useEffect, useState } from "react";
import { Button } from "antd";
import '../../css/Dashboard.css'
import { AppContext, IAppActionType } from "../../contexts/appContext";
import { Link } from "react-router-dom";

const ENDPOINT = "http://localhost:3001/";

const Dasboard: React.FC = () => {

    const { state, dispatch } = useContext(AppContext);



    useEffect(() => {
        const newSocket = io(ENDPOINT);
        dispatch({ type: IAppActionType.SetSocket, Socket: newSocket });
    }, []);

    const disconnect = () => {
        const socketUpdate = state.Socket.close();
        dispatch({ type: IAppActionType.SetSocket, Socket: socketUpdate });
    }


    return (
        <div className="containerDash">
            <div className="centerDash">
                <h1 style={{ textAlign: 'center' }}>DASHBOARD</h1>
                <Link to="/chat">
                    <Button className="buttonFeartures">Chat</Button>
                </Link>
                <Link to="/kanban">
                    <Button className="buttonFeartures">Kanban</Button>
                </Link>
                <div>
                    <Button className="buttonDisconnect" onClick={() => disconnect()}>Disconnect</Button>
                </div>
            </div>
        </div >
    );
}
export default Dasboard;