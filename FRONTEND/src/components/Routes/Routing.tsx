import { Route, Routes } from "react-router-dom"
import Chat from "../Chat/Chat"
import Dasboard from "../Dashboard/Dashboard"
import Login from "../Login/Login"

const Routing: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dasboard />} />
            <Route path="/chat" element={<Chat />} />
        </Routes>
    )
}
export default Routing