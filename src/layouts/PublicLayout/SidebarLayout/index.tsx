import { Flex } from "@radix-ui/themes";
import { FC, ReactNode } from "react"
import CollapsibleSideBar from "./SidebarMenu";

interface SidebarLayoutProps {
    children?: ReactNode;
}

const SidebarLayout: FC<SidebarLayoutProps> = () => {
    return (
        <>
            <Flex className="flex-1 w-full max-w-7x1 mx-auto overflow-hidden">
                <CollapsibleSideBar />
            </Flex>
        </>
    )
}

export default SidebarLayout;