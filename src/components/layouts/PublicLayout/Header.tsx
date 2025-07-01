import { Flex, IconButton, Container, Box } from "@radix-ui/themes";
import { DragHandleHorizontalIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { SidebarContext } from "../../../contexts/SidebarContext";
import SearchField from "../../ui/Fields/SearchField";
import PrimaryButton from "../../ui/Buttons/PrimaryButton";
import { DropdownContent, DropdownItem, NavDropdown } from "../../ui/Dropdown/NavDropdown";

export default function Header() {
    const { toggleSidebar } = useContext(SidebarContext);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <Container size="2">
                <SearchField />
                <Flex align="center" justify="center" gap="4" className="mt-2 mx-4 my-1 md:mb-3">
                    <Flex align="center" gap="4" className="backdrop-blur">
                        <NavDropdown label="Categories">
                            <DropdownContent>
                                <DropdownItem>Teste</DropdownItem>
                                <DropdownItem>Teste2</DropdownItem>
                                <DropdownItem>Teste3</DropdownItem>
                            </DropdownContent>
                        </NavDropdown>
                        <PrimaryButton>What's New</PrimaryButton>
                        <PrimaryButton>Blog</PrimaryButton>
                        <Box className="pl-10">
                            <IconButton
                                variant="solid"
                                size="2"
                                highContrast
                                onClick={toggleSidebar}
                                className="block md:hidden"
                                aria-label="Alternar filtros"
                            >
                                <DragHandleHorizontalIcon />
                            </IconButton>
                        </Box>
                    </Flex>
                </Flex>
            </Container>

        </header>
    )
}