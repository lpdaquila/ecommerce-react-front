import { Card, CheckboxGroup, Container, Flex, Grid, Heading, Separator, Skeleton } from "@radix-ui/themes";
import SectionHeader from "../components/layouts/public-layout/section";
import { Sidebar } from "../components/layouts/public-layout/sidebar";
import Header from "../components/layouts/public-layout/headers/home-header";
import { ProductCard } from "../components/layouts/public-layout/product-card";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/sidebar-context";
import { ShoppingCartCard } from "../components/ui/cards/shopping-cart-card";
import { useRequests } from "../app/hooks/useRequests";
import { APIGetProducts } from "../app/types/products";
import { ErrorCallout } from "../components/ui/callouts/error-callout";

export default function Home() {
    const { sidebarToggle } = useContext(SidebarContext);

    const { getProducts } = useRequests();

    const [loading, setLoading] = useState(true);
    const [apiError, setApiError] = useState('');
    const [pageData, setPageData] = useState<APIGetProducts | null>(null);

    const handleGetProducts = async () => {
        setApiError('');
        const response = await getProducts();

        if (response.detail) {
            setApiError(response.detail);
            return;
        }

        setPageData(response.data ?? null);
    }

    useEffect(() => {
        Promise.resolve([handleGetProducts()]).finally(() => {
            setLoading(false);
        })
    }, [])

    return (
        <>
            <Header />
            <SectionHeader />
            <Flex direction="row">
                <Sidebar>
                    {sidebarToggle && <ShoppingCartCard />}
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
                <Container size="3" mr="10%" mt="3" ml="5">
                    {apiError && <ErrorCallout msg={apiError} />}
                    {loading && <Skeleton />}
                    {pageData &&
                        <Grid
                            columns={{ initial: "1", sm: "2", lg: "3", xl: "3" }}
                            gap="4"
                            width={{ initial: "100%", md: "112%" }}
                            justify="center"
                            align="center"
                        >
                            {pageData.products.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </Grid>
                    }
                </Container>
            </Flex>
        </>
    )
}