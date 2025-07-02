import { Flex, IconButton, Container, Text, Card } from "@radix-ui/themes";
import { DragHandleHorizontalIcon, PersonIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { SidebarContext } from "../../../contexts/sidebar-context";
import SearchField from "../../ui/fields/search-field";
import PrimaryButton from "../../ui/buttons/primary-button";
import { DropdownContent, DropdownItem, NavDropdown } from "../../ui/dropdown/nav-dropdown";

export default function Header() {
    const { toggleSidebar } = useContext(SidebarContext);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <Flex
                position={{ initial: "relative", md: "sticky" }}
                direction={{ sm: "column", lg: "row" }}
                className="bg-red-100"
            >
                <Container
                    maxWidth="200px"
                    mt="6"
                    ml="4"
                    position={{ md: "relative", lg: "absolute" }}
                    display={{ initial: 'none', md: 'initial' }}
                >
                    <Text size="8">Your Store</Text>
                </Container>
                <Container size="3" position="relative">
                    <SearchField />
                    <Flex
                        align="start"
                        direction="column"
                        justify="start"
                        gap="4"
                        mt="2"
                        mb="2"
                        minWidth="0"
                    >
                        <Flex gap="4" className="backdrop-blur">
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
                            <Flex
                                justify="end"
                                display={{ initial: 'flex', sm: 'none' }}>
                                <IconButton
                                    variant="solid"
                                    size="2"
                                    highContrast
                                    onClick={toggleSidebar}
                                    aria-label="Alternar filtros"
                                >
                                    <DragHandleHorizontalIcon />
                                </IconButton>
                            </Flex>
                        </Flex>
                    </Flex>
                </Container>
                <Flex
                    align="end"
                    mb="8"
                    mr="2"
                    justify="end"
                    display={{ initial: 'none', sm: 'inline-flex' }}>
                    <Card variant="ghost" size="2">
                        <PrimaryButton onClick={() => console.log('click')}><PersonIcon />Sign In</PrimaryButton>
                    </Card>
                </Flex>
            </Flex>
        </header>
    )
}