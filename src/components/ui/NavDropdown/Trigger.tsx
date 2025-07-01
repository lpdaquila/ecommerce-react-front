import { DropdownMenu } from "@radix-ui/themes";
import { ReactNode } from "react";

type Props = {
    content: ReactNode;
}

export default function DropdownTrigger({ content }: Props) {
    return (
        <DropdownMenu.Trigger>
            {content}
        </DropdownMenu.Trigger>
    )
}