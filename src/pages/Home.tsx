import { Card, Container, Flex, Grid, Heading, Separator, Skeleton, } from "@radix-ui/themes";
import SectionHeader from "../components/layouts/public-layout/section";
import { Sidebar } from "../components/layouts/public-layout/sidebar";
import Header from "../components/layouts/public-layout/headers/home-header";
import { ProductCard } from "../components/layouts/public-layout/product-card";
import { useContext, useEffect, useMemo, useState } from "react";
import { SidebarContext } from "../contexts/sidebar-context";
import { ShoppingCartCard } from "../components/ui/cards/shopping-cart-card";
import { useRequests } from "../app/hooks/useRequests";
import { APIGetProducts } from "../app/types/products";
import { ErrorCallout } from "../components/ui/callouts/error-callout";
import { ProductFilterHandler } from "../components/handlers/product-filter-handler";

export default function Home() {
  const { sidebarToggle } = useContext(SidebarContext);

  const { getProducts } = useRequests();

  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState('');
  const [pageData, setPageData] = useState<APIGetProducts | null>(null);
  const [filters, setFilters] = useState({
    priceRange: [0, 10000],
    subVars: {} as Record<string, string[]>,
  })
  // const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const filteredProducts = useMemo(() => {
    if (!pageData?.products) return;

    return pageData.products.filter(product => {
      const price = Number(product.sale_price ?? 0);

      // filter by price
      if (price < filters.priceRange[0] || price > filters.priceRange[1]) {
        return false;
      }

      // filter by sub_vars 
      for (const [key, selectedOptions] of Object.entries(filters.subVars)) {
        const productOptions = product.sub_vars?.[key] ?? [];

        if (selectedOptions.length && !selectedOptions.some(opt =>
          productOptions.includes(opt)
        )) {
          return false;
        }
      }
      return true;
    });

  }, [filters, pageData])

  const handleGetProducts = async () => {
    setApiError('');
    const response = await getProducts();

    if (response.detail) {
      setApiError(response.detail);
      return;
    }

    setPageData(response.data ?? null);
  }

  const handleFilterChange = (filter: {
    priceRange: [number, number];
    subVars: Record<string, string[]>;
  }) => {
    setFilters(filter)
  }

  useEffect(() => {
    Promise.resolve([handleGetProducts()]).finally(() => {
      setLoading(false);
    })
  }, [])

  // useEffect(() => {
  //   if (!pageData?.products) return;

  //   const result = pageData.products.filter(product => {
  //     const price = Number(product.sale_price ?? 0);

  //     // filter by price
  //     if (price < filters.priceRange[0] || price > filters.priceRange[1]) {
  //       return false;
  //     }

  //     // filter by sub_vars 
  //     for (const [key, selectedOptions] of Object.entries(filters.subVars)) {
  //       const productOptions = product.sub_vars?.[key] ?? [];

  //       if (selectedOptions.length && !selectedOptions.some(opt =>
  //         productOptions.includes(opt)
  //       )) {
  //         return false;
  //       }
  //     }
  //     return true;
  //   });

  //   setFilteredProducts(result);
  //   console.log('result: ', result)
  // }, [filters, pageData])

  return (
    <>
      <Header />
      <SectionHeader />
      <Flex direction="row">
        <Sidebar>
          {sidebarToggle && <ShoppingCartCard />}
          <Card mt="2">
            <Flex direction="column" gap="2">
              <Heading as="h2" size="3">
                Filters
              </Heading>
              <Separator orientation="horizontal" size="4" mb="2" />
              {pageData &&
                <ProductFilterHandler
                  onFilterChange={handleFilterChange}
                  products={pageData.products}
                />
              }
            </Flex>
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
              {filteredProducts && filteredProducts.length == 0 ?
                <Container>No products found</Container>
                : filteredProducts && filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </Grid>
          }
        </Container>
      </Flex>
    </>
  )
}