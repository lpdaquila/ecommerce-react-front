import * as Collapsible from "@radix-ui/react-collapsible";
import { ReactNode, useContext } from "react";
import { SidebarContext } from "../../../contexts/sidebar-context";
import { Box, Flex, IconButton } from "@radix-ui/themes";
import { Cross1Icon } from "@radix-ui/react-icons";

type Props = {
    children: ReactNode;
}

export function Sidebar({ children }: Props) {
    const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);

    return (
        <Box
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
                    bg-panel-alt w-64 h-full lg:relative lg:translate-x-0 lg:block
                    fixed top-0 bottom-0 left-0 z-70 bg-background/95
                    transition-transform data-[state=closed]:-translate-x-full
                    lg:data-[state=closed]:translate-x-0
                    `}
                >
                    <aside className="h-full overflow-y-auto p-2 pt-2 md:pt-4">
                        {sidebarToggle &&
                            <Flex justify="end">
                                <IconButton
                                    onClick={() => toggleSidebar()}
                                >
                                    <Cross1Icon />
                                </IconButton>
                            </Flex>
                        }
                        {children}
                    </aside>

                </Collapsible.Content>
            </Collapsible.Root>
        </Box>
    )
}