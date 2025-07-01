import { Flex, IconButton, TextField, Container, Box } from "@radix-ui/themes";
import NavDropdown from "./DropdownMenu";
import { Cross1Icon, MagnifyingGlassIcon, ViewVerticalIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { SidebarContext } from "../../contexts/SidebarContext";


export default function Header() {
    const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <Container size="2">
                <Flex align="center" justify="center" gap="2" className="mt-4">
                    <TextField.Root placeholder="Search for products...">
                        <TextField.Slot>
                        </TextField.Slot>
                    </TextField.Root>
                    <Box pl="4" className="md:pl-0">
                        <IconButton type="submit" highContrast size="2">
                            <MagnifyingGlassIcon />
                        </IconButton>
                    </Box>
                </Flex>
                <Flex align="center" justify="center" gap="4" className="mt-2 mx-4 my-1 md:mb-3">
                    <Flex align="center" gap="4" className="backdrop-blur">
                        <NavDropdown label="Categories" />
                        <NavDropdown label="Promotions" />
                        <Box className="pl-10">
                            <IconButton
                                variant="solid"
                                size="2"
                                highContrast
                                onClick={toggleSidebar}
                                className="block md:hidden"
                                aria-label="Alternar filtros"
                            >
                                {sidebarToggle ? <Cross1Icon /> : <ViewVerticalIcon />}
                            </IconButton>
                        </Box>
                    </Flex>
                </Flex>
            </Container>

        </header>
    )
}