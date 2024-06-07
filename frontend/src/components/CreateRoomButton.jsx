import React from "react"
import { useNavigate } from "react-router-dom"
import useRoomContext from "../store/hooks/useRoomContext"
import { socket } from "../services/socket"
import { Button } from "@/components/ui/button"

export default function CreateRoomButton() {
    const navigate = useNavigate()
    const { dispatch } = useRoomContext()

    const createRoomEvent = (roomId) => {
        console.log(roomId)
        dispatch({ type: "CREATE_ROOM", payload: { roomId } })
        navigate(`/room/${roomId}`)
    }

    const handleCreateRoom = () => {
        socket.emit("create-room", createRoomEvent)
    }

    return <Button onClick={handleCreateRoom}>Create Room</Button>
}
