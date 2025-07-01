import { DropdownMenu } from "@radix-ui/themes";
import { ReactNode } from "react";

type Props = {
    trigger: ReactNode;
    content: ReactNode;
}

export default function NavDropdown({ trigger, content }: Props) {
    return (
        <DropdownMenu.Root>
            {trigger}
            {content}
        </DropdownMenu.Root>
    )
}