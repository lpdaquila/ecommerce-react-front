import * as Collapsible from "@radix-ui/react-collapsible";
import { ReactNode, useContext } from "react";
import { SidebarContext } from "../../../contexts/sidebar-context";
import { Card, Flex } from "@radix-ui/themes";

type Props = {
    children: ReactNode;
}

export function Sidebar({ children }: Props) {
    const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);

    return (
        <Flex
            flexGrow="1"
            width="0%"
            overflow="hidden"
            className="mx-auto"
        >
            <Collapsible.Root
                open={sidebarToggle}
                onOpenChange={toggleSidebar}
                className="shrink-0"
            >
                <Collapsible.Content
                    forceMount
                    className={`
                    w-64 md:relative md:translate-x-0 md:block
                    fixed top-0 bottom-0 left-0 z-20 bg-background/95 backdrop-blur
                    transition-transform data-[state=closed]:-translate-x-full
                    md:data-[state=closed]:translate-x-0
                    `}
                >
                    <aside className="h-full overflow-y-auto border-r p-2 pt-32 md:pt-4">
                        <Card>
                            {children}
                        </Card>
                    </aside>

                </Collapsible.Content>
            </Collapsible.Root>
        </Flex>
    )
}