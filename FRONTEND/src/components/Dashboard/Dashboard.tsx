import io, { Socket } from "socket.io-client";
import { useEffect, useState } from "react";

const ENDPOINT = "http://localhost:3001/";



const Dasboard: React.FC = () => {

    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const newSocket = io(ENDPOINT);
        setSocket(newSocket);
        return () => {
            newSocket.close();
        }
    }, []);


    return (
        <div >
            Dashboard
        </div>
    );
}
export default Dasboard;