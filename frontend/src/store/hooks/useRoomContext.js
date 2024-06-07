import { useContext } from "react"
import RoomContext from "../context/RoomContext"

const useRoomContext = () => {
    const context = useContext(RoomContext)
    if (!context) {
        throw new Error("useRoomContext must be used within an RoomProvider")
    }
    return context
}

export default useRoomContext
