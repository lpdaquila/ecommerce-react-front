import { Flex, IconButton, Container, Box, Text, Card } from "@radix-ui/themes";
import { DragHandleHorizontalIcon, PersonIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { SidebarContext } from "../../../contexts/SidebarContext";
import SearchField from "../../ui/Fields/SearchField";
import PrimaryButton from "../../ui/Buttons/PrimaryButton";
import { DropdownContent, DropdownItem, NavDropdown } from "../../ui/Dropdown/NavDropdown";

export default function Header() {
    const { toggleSidebar } = useContext(SidebarContext);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <Flex position="relative" className="bg-red-100">
                {/* Gambiarra abaixo, o hidden não funciona então eu zerei o max-h e w no mobile e deixei
                só aparecendo no desktop md:max-w-50 */}
                <Container className="invisible md:visible max-w-0 max-h-0 md:max-w-50 mt-7 ml-3">
                    <Text size="8">Your Store</Text>
                </Container>
                <Container size="4">
                    <SearchField />
                    <Flex align="start" justify="start" gap="4" className="mt-2 mb-2 min-w-0">
                        <Flex align="start" gap="3" className="backdrop-blur">
                            <NavDropdown label="Categories">
                                <DropdownContent>
                                    <DropdownItem onSelect={() => console.log('clicou')}>Teste</DropdownItem>
                                    <DropdownItem>Teste2</DropdownItem>
                                    <DropdownItem>Teste3</DropdownItem>
                                </DropdownContent>
                            </NavDropdown>
                            <PrimaryButton>What's New</PrimaryButton>
                            <PrimaryButton>Blog</PrimaryButton>
                            <PrimaryButton>Test</PrimaryButton>
                            <Box position="relative" className="visible md:invisible">
                                <IconButton
                                    variant="solid"
                                    size="2"
                                    highContrast
                                    onClick={toggleSidebar}
                                    aria-label="Alternar filtros"
                                >
                                    <DragHandleHorizontalIcon />
                                </IconButton>
                            </Box>
                        </Flex>
                    </Flex>
                </Container>
                <Flex align="end" className="invisible md:visible ml-60 mr-5 mb-12">
                    <Card variant="ghost" size="2">
                        <PrimaryButton onClick={() => console.log('click')}><PersonIcon />Sign In</PrimaryButton>
                    </Card>
                </Flex>
            </Flex>
        </header>
    )
}