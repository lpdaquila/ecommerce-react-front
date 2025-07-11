import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import React, { forwardRef } from "react";

type Props = React.ComponentProps<typeof IconButton>

export const TurnBackBtn = forwardRef<HTMLButtonElement, Props>(
    ({ children, className, ...props }, ref) => (
        <IconButton
            ref={ref}
            variant="soft"
            className={`inline-flex items-center gap-1 mx-1 ${className ?? ""}`}
            {...props}
        >
            <ArrowLeftIcon />
        </IconButton>
    )
)

TurnBackBtn.displayName = "TurnBackBtn";
