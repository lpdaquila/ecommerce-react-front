import { Flex, IconButton, Container, Text, Separator } from "@radix-ui/themes";
import { useContext } from "react";
import { SidebarContext } from "../../../contexts/sidebar-context";
import SearchField from "../../ui/fields/search-field";
import PrimaryButton from "../../ui/buttons/primary-button";
import { DropdownContent, DropdownItem, NavDropdown } from "../../ui/dropdown/nav-dropdown";
import { SideGrid } from "../../side-grid";
import { MenuIcon } from "lucide-react";
import { TopButtons } from "../../top-buttons";

export default function Header() {
    const { toggleSidebar } = useContext(SidebarContext);

    return (
        <header
            style={{
                backgroundColor: "var(--accent-2)",
                position: "relative",
                top: "0",
                width: "100%",
                zIndex: "50"
            }}
            className="bg-background/95"
        >
            <TopButtons />
            <Flex
                className="bg-panel"
                position={{ initial: "relative", md: "sticky" }}
                direction={{ sm: "column", lg: "row" }}
            >
                <Container
                    maxWidth="100%"
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
                    >
                        <Flex gap="4" className="backdrop-blur">
                            <Flex
                                justify="start"
                                display={{ initial: 'flex', sm: 'none' }}>
                                <IconButton
                                    variant="solid"
                                    size="2"
                                    highContrast
                                    onClick={toggleSidebar}
                                    aria-label="Alternar filtros"
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Flex>
                            <NavDropdown label="Categories">
                                <DropdownContent>
                                    <DropdownItem onSelect={() => console.log('clicou')}>Test</DropdownItem>
                                    <DropdownItem>Test2</DropdownItem>
                                    <DropdownItem>Test3</DropdownItem>
                                    <DropdownItem>Test4</DropdownItem>
                                    <DropdownItem>Test5</DropdownItem>
                                </DropdownContent>
                            </NavDropdown>
                            <PrimaryButton variant="ghost">What's New</PrimaryButton>
                            <PrimaryButton variant="ghost">Blog</PrimaryButton>
                            <PrimaryButton variant="ghost">Test</PrimaryButton>
                        </Flex>
                    </Flex>
                </Container>
                <Flex
                    align="end"
                    mb="3"
                    mr="2"
                    justify="end"
                    display={{ initial: 'none', sm: 'flex' }}>
                    <SideGrid />
                </Flex>
            </Flex>
            <Separator size="4" />
        </header>
    )
}