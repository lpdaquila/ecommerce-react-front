import { Box, IconButton } from "@radix-ui/themes";
import { MenuIcon } from "lucide-react";
import { useContext } from "react";
import { SidebarContext } from "../../../contexts/sidebar-context";

export function MobileMenuButton() {
    const { toggleSidebar } = useContext(SidebarContext);
    return (
        <Box
            display={{ initial: 'block', md: 'none' }}>
            <IconButton
                variant="solid"
                size="2"
                highContrast
                onClick={toggleSidebar}
                aria-label="Alternar filtros"
            >
                <MenuIcon />
            </IconButton>
        </Box>
    )
}