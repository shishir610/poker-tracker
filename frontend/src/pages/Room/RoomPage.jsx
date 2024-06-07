import useRoomContext from "@/src/store/hooks/useRoomContext"
import React from "react"
import AdminPage from "./AdminPage"
import PlayerPage from "./PlayerPage"
import PageWrapper from "../PageWrapper"
import AdminProvider from "@/src/store/providers/AdminProvider"
import PlayerProvider from "@/src/store/providers/PlayerProvider"

export default function RoomPage() {
    const { state } = useRoomContext()
    return (
        <PageWrapper>
            {state.isHost ? (
                <AdminProvider>
                    <AdminPage />
                </AdminProvider>
            ) : (
                <PlayerProvider>
                    <PlayerPage />
                </PlayerProvider>
            )}
        </PageWrapper>
    )
}
