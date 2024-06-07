import React from "react"
import Heading from "./ui/Heading"
import useAdminContext from "../store/hooks/useAdminContext"
import SubHeading from "./ui/SubHeading"
import LinkToCopy from "./ui/LinkToCopy"

const NoPlayersContent = () => {
    return (
        <div className="flex flex-col gap-y-2 w-full h-full justify-center items-center">
            <SubHeading title={"Share below link to add players to lobby."} />
            <LinkToCopy link={window.location.href} />
        </div>
    )
}

export default function PlayersSidebar() {
    const { state } = useAdminContext()

    return (
        <div className="w-1/4 border-r-2 shadow-sm p-5">
            {state.players.length === 0 ? (
                <NoPlayersContent />
            ) : (
                <Heading title="Players" />
            )}
        </div>
    )
}
