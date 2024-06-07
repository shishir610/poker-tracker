import { Button } from "@/components/ui/button"
import { ClipboardCopyIcon, CopyIcon } from "@radix-ui/react-icons"
import React from "react"

export default function LinkToCopy({ link }) {
    return (
        <Button size={3} className="p-1">
            <ClipboardCopyIcon className="mr-2 h-4 w-4" /> {link}
        </Button>
    )
}
