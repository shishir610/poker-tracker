import React from "react"
import RoomProvider from "../store/providers/RoomProvider"

export default function PageWrapper({ children }) {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            {children}
        </div>
    )
}
