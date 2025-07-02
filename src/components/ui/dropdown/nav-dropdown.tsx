import { DropdownMenu } from "@radix-ui/themes";
import React, { forwardRef, ReactNode } from "react";
import PrimaryButton from "../buttons/primary-button";

type Props = {
    label?: string;
    children: ReactNode;
}

const TriggerButton = forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof PrimaryButton>
>(({ children, ...props }, ref) => (
    <PrimaryButton ref={ref} {...props} isDropdown>
        {children}
    </PrimaryButton>
));
TriggerButton.displayName = "TriggerButton";

export const DropdownItem = forwardRef<
    HTMLDivElement,
    React.ComponentProps<typeof DropdownMenu.Item>
>(({ children, className, ...props }, ref) => (
    <DropdownMenu.Item
        ref={ref}
        className={`cursor-pointer ${className ?? ""}`}
        {...props}
    >
        {children}
    </DropdownMenu.Item>
));
DropdownItem.displayName = "DropdownItem";

export function DropdownContent({ children }: Props) {
    return (
        <DropdownMenu.Content
            sideOffset={4}
            className="min-w-[160px] rounded-md border bg-background shadow-lg p-2"
        >
            {children}
        </DropdownMenu.Content>
    )
}

export function NavDropdown({ label, children }: Props) {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <TriggerButton>{label}</TriggerButton>
            </DropdownMenu.Trigger>
            {children}
        </DropdownMenu.Root>
    )
}

