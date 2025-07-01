import { Button, ChevronDownIcon } from "@radix-ui/themes";
import React, { forwardRef } from "react";

type Props = React.ComponentProps<typeof Button> & {
    isDropdown?: boolean;
}

const PrimaryButton = forwardRef<HTMLButtonElement, Props>(
    ({ children, isDropdown = false, className, ...props }, ref) => (
        <Button
            ref={ref}
            variant="solid"
            size="2"
            className={`inline-flex items-center gap-1 mx-1 ${className ?? ""}`}
            {...props}
        >
            {children}
            {isDropdown && <ChevronDownIcon aria-hidden />}
        </Button>
    )
)

PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;
