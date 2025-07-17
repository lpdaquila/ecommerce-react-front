import { Flex, Container, Separator, Link, Box } from "@radix-ui/themes";
import SearchField from "../../../ui/fields/search-field";
import PrimaryButton from "../../../ui/buttons/primary-button";
import { TopButtons } from "../../../top-buttons";
import { ResponsiveCard } from "../../../ui/cards/responsive-card";
import { ShoppingCartCard } from "../../../ui/cards/shopping-cart-card";
import { StoreLogo } from "../../../ui/logos/store-logo";
import { MobileMenuButton } from "../../../ui/buttons/mobile-menu-button";

export default function Header() {
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
            <Flex direction="row"
                justify={{ initial: "between", md: "end" }}
                align="center">
                <MobileMenuButton />
                <Flex direction="column" align="end" justify="end">
                    <TopButtons />
                </Flex>
            </Flex>
            <Flex
                className="bg-panel"
                position={{ initial: "relative", md: "sticky" }}
                direction={{ sm: "column", lg: "row" }}
            >
                <Box
                    width="100px"
                    position={{ md: "relative", lg: "static" }}
                    display={{ initial: 'none', md: 'block' }}
                >
                    <StoreLogo />
                </Box>
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
                            <ResponsiveCard trigger={
                                <PrimaryButton variant="ghost" isDropdown>Categories</PrimaryButton>}
                            >
                                <Flex direction="column" width="100px">
                                    <Link href="#">Test</Link>
                                    <Link href="#">Test</Link>
                                    <Link href="#">Test</Link>
                                    <Link href="#">Test</Link>
                                    <Link href="#">Test</Link>
                                </Flex>
                            </ResponsiveCard>
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
                    display={{ initial: 'none', lg: 'flex' }}
                >
                    <ShoppingCartCard />
                </Flex>
            </Flex>
            <Separator size="4" />
        </header>
    )
}