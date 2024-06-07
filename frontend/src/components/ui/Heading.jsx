import { cn } from "@/lib/utils"
import React from "react"

export default function Heading({ title, className }) {
    return (
        <h3
            className={cn(
                "scroll-m-20 text-2xl font-semibold tracking-tight",
                className
            )}
        >
            {title}
        </h3>
    )
}
