import React from "react"
import PageWrapper from "./PageWrapper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import CreateRoomButton from "../components/CreateRoomButton"
import Heading from "../components/ui/Heading"
import SubHeading from "../components/ui/SubHeading"

export default function HomePage() {
    return (
        <PageWrapper>
            <div className="flex flex-col gap-2">
                <Heading title="Poker Tracker" />
                <Separator className="mb-5" />
                <SubHeading title={"Join a room"} />
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input
                        type="email"
                        className="border border-black"
                        placeholder="Room ID"
                    />
                    <Button type="submit">Join Room</Button>
                </div>
                <Separator className="my-5" />
                <SubHeading title={"Or create a new room"} />
                <p className="text-sm text-muted-foreground">
                    This device serves as the host and <br /> displays the poker
                    table.
                </p>
                <CreateRoomButton />
            </div>
        </PageWrapper>
    )
}
