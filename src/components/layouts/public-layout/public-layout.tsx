import { Flex } from "@radix-ui/themes";
import { FC, ReactNode } from "react";
import { Outlet } from "react-router";

interface PublicLayoutProps {
    children?: ReactNode
}

const PublicLayout: FC<PublicLayoutProps> = ({ children }) => {
    return (
        <Flex asChild flexGrow="1" className="min-h-screen min-w-screen">
            {children ?? <Outlet />}
        </Flex>
    );
};

// PropTypes removed because TypeScript handles prop validation

export default PublicLayout;