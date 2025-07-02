import { Box, Flex } from "@radix-ui/themes";
import { FC, ReactNode } from "react";
import { Outlet } from "react-router";
import Header from "./header";

interface PublicLayoutProps {
    children?: ReactNode
}

const PublicLayout: FC<PublicLayoutProps> = ({ children }) => {
    return (
        <Box className="min-h-screen flex flex-col">
            <Header />

            <Flex asChild className="flex-1">
                {children ?? <Outlet />}
            </Flex>
        </Box>
    );
};

// PropTypes removed because TypeScript handles prop validation

export default PublicLayout;