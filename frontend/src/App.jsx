import { useEffect } from "react"
import { socket } from "./services/socket"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import RoomProvider from "./store/providers/RoomProvider"
import RoomPage from "./pages/Room/RoomPage"

function App() {
    useEffect(() => {
        socket.on("connect", () => console.log(socket.id))
        return () => {
            socket.off("connect", () => console.log(socket.id))
        }
    }, [])

    return (
        <RoomProvider>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/room">
                    <Route path=":roomId" element={<RoomPage />} />
                </Route>
            </Routes>
        </RoomProvider>
    )
}

export default App
