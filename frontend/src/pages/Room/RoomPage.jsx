import useRoomContext from "@/src/store/hooks/useRoomContext"
import React from "react"
import AdminPage from "./AdminPage"
import PlayerPage from "./PlayerPage"
import PageWrapper from "../PageWrapper"
import AdminProvider from "@/src/store/providers/AdminProvider"

export default function RoomPage() {
    const { state } = useRoomContext()
    return (
        <PageWrapper>
            {state.isHost ? (
                <AdminProvider>
                    <AdminPage />
                </AdminProvider>
            ) : (
                <PlayerPage />
            )}
        </PageWrapper>
    )
}
