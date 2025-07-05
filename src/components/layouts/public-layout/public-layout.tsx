import { Flex } from "@radix-ui/themes";
import { FC, ReactNode, useEffect } from "react";
import { Outlet } from "react-router";
import { useAuth } from "../../../app/hooks/useAuth";

interface PublicLayoutProps {
    children?: ReactNode
}

const PublicLayout: FC<PublicLayoutProps> = ({ children }) => {
    const { handleInitUser } = useAuth();
    useEffect(() => {
        handleInitUser();
    }, [])

    return (
        <Flex asChild flexGrow="1" className="min-h-screen min-w-screen">
            {children ?? <Outlet />}
        </Flex>
    );
};

// PropTypes removed because TypeScript handles prop validation

export default PublicLayout;