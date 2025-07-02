import { Button } from "@radix-ui/themes";
import React, { forwardRef } from "react";

type Props = React.ComponentProps<typeof Button>

export const SecondaryButton = forwardRef<HTMLButtonElement, Props>(
    ({ children, className, ...props }, ref) => (
        <Button
            ref={ref}
            variant="soft"
            className={`inline-flex items-center gap-1 mx-1 ${className ?? ""}`}
            {...props}
        >
            {children}
        </Button>
    )
)

SecondaryButton.displayName = "SecondaryButton";