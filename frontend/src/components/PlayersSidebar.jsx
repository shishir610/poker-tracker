import React, { Fragment, useEffect } from "react"
import Heading from "./ui/Heading"
import useAdminContext from "../store/hooks/useAdminContext"
import SubHeading from "./ui/SubHeading"
import LinkToCopy from "./ui/LinkToCopy"
import { socket } from "../services/socket"
import { Separator } from "@/components/ui/separator"

const NoPlayersContent = () => {
    return (
        <div className="flex flex-col gap-y-2 w-full h-full justify-center items-center">
            <SubHeading title={"Share below link to add players to lobby."} />
            <LinkToCopy link={window.location.href} />
        </div>
    )
}

const PlayerTile = ({ nickname, amount }) => {
    return (
        <div className="py-2 flex justify-between items-center border-b-2 border-gray">
            <SubHeading title={nickname} />${amount}
        </div>
    )
}

const PlayersList = ({ players }) => {
    console.log(players)
    return (
        <div>
            <Heading title="Players" className="mb-4" />
            {players.map((player) => (
                <PlayerTile {...player} />
            ))}
        </div>
    )
}

export default function PlayersSidebar() {
    const { state, dispatch } = useAdminContext()

    const addPlayerEvent = (player) => {
        dispatch({ type: "ADD_PLAYER", payload: player })
    }

    useEffect(() => {
        socket.on("add-player", addPlayerEvent)
        return () => {
            socket.off("add-player", addPlayerEvent)
        }
    }, [])

    return (
        <div className="w-1/4 border-r-2 shadow-sm p-5">
            {state.players.length === 0 ? (
                <NoPlayersContent />
            ) : (
                <PlayersList players={state.players} />
            )}
        </div>
    )
}
