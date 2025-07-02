import { Flex } from "@radix-ui/themes";
import { FC, ReactNode } from "react";
import { Outlet } from "react-router";

interface PublicLayoutProps {
    children?: ReactNode
}

const PublicLayout: FC<PublicLayoutProps> = ({ children }) => {
    return (
        // <Box className="min-h-screen flex flex-col">
        <Flex asChild flexGrow="0">
            {children ?? <Outlet />}
        </Flex>
        // </Box>
    );
};

// PropTypes removed because TypeScript handles prop validation

export default PublicLayout;