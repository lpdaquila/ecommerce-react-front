import { DropdownMenu } from "@radix-ui/themes";
import { ReactNode } from "react";

type Props = {
    items: ReactNode;
}

export default function DropdownContent({ items }: Props) {
    return (
        <DropdownMenu.Content
            sideOffset={4}
            className="min-w-[160px] rounded-md border bg-background shadow-lg p-2"
        >
            {items}
        </DropdownMenu.Content>
    )
}