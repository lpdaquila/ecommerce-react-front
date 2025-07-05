import { Card, CheckboxGroup, Container, Flex, Grid, Heading, Popover, Separator } from "@radix-ui/themes";
import SectionHeader from "../components/layouts/public-layout/section";
import { Sidebar } from "../components/layouts/public-layout/sidebar";
import Header from "../components/layouts/public-layout/header";
import { ProductCard } from "../components/layouts/public-layout/product-card";
import { useContext } from "react";
import { SidebarContext } from "../contexts/sidebar-context";
import { CartItemsCard } from "../components/ui/cards/cart-items-card";
import ShoppingCartBtn from "../components/ui/buttons/cart-button";

export default function Home() {
    const { sidebarToggle } = useContext(SidebarContext);
    return (
        <>
            <Header />
            <SectionHeader />
            <Flex direction="row">
                <Sidebar>
                    {sidebarToggle &&
                        <Popover.Root>
                            <Popover.Trigger>
                                <ShoppingCartBtn />
                            </Popover.Trigger>
                            <Popover.Content>
                                <CartItemsCard />
                            </Popover.Content>
                        </Popover.Root>}
                    <Card mt="2">
                        <Heading as="h2" size="3">
                            Filters
                        </Heading>
                        <Separator orientation="horizontal" size="4" mb="2" />
                        <CheckboxGroup.Root name="example">
                            <CheckboxGroup.Item value="1">Test</CheckboxGroup.Item>
                            <CheckboxGroup.Item value="2">Example</CheckboxGroup.Item>
                            <CheckboxGroup.Item value="3">This</CheckboxGroup.Item>
                            <CheckboxGroup.Item value="4">That</CheckboxGroup.Item>
                            <CheckboxGroup.Item value="5">Test</CheckboxGroup.Item>
                        </CheckboxGroup.Root>
                    </Card>
                </Sidebar>
                <Container size="3" mr="7%" mt="3" ml="3">
                    <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap="4" width="112%">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </Grid>
                </Container>
            </Flex>
        </>
    )
}