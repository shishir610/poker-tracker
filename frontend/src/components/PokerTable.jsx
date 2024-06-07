import React from "react"
import { Button } from "@/components/ui/button"
import useRoomContext from "../store/hooks/useRoomContext"
import { socket } from "../services/socket"

const Table = () => {
    return <div>Table</div>
}

export default function PokerTable() {
    const { state, dispatch } = useRoomContext()

    const handleStartGame = () => {
        socket.emit("start-game")
        dispatch({ type: "START_GAME" })
    }

    return (
        <div className="flex w-full h-full justify-center items-center">
            {state.hasGameStarted ? (
                <Table />
            ) : (
                <Button onClick={handleStartGame}>Start Game</Button>
            )}
        </div>
    )
}
