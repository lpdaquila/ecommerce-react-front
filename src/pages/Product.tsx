import { Box, Card, Flex, Heading, RadioCards, Separator, Strong, Text } from "@radix-ui/themes";
import { useParams } from "react-router";
import Header from "../components/layouts/public-layout/headers/home-header";
import PrimaryButton from "../components/ui/buttons/primary-button";
import { SecondaryButton } from "../components/ui/buttons/secondary-button";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { useRequests } from "../app/hooks/useRequests";
import { useContext, useEffect, useState } from "react";
import { APIGetProductDetail } from "../app/types/products";
import { ErrorCallout } from "../components/ui/callouts/error-callout";
import { ProductPageSkeleton } from "../components/ui/skeletons/product-page-skeleton";
import { SidebarContext } from "../contexts/sidebar-context";
import { Sidebar } from "../components/layouts/public-layout/sidebar";
import { ShoppingCartCard } from "../components/ui/cards/shopping-cart-card";

export default function Product() {
  const { slug: slug } = useParams();

  const { sidebarToggle } = useContext(SidebarContext);

  const { getProductDetail } = useRequests();

  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState('');
  const [pageData, setPageData] = useState<APIGetProductDetail | null>(null);

  const handleGetProductDetail = async () => {
    setApiError('');
    const response = await getProductDetail(slug ?? '');

    if (response.detail) {
      setApiError(response.detail)
      return;
    }

    setPageData(response.data ?? null)
  }

  useEffect(() => {
    Promise.resolve([handleGetProductDetail()]).finally(() => {
      setLoading(false);
    })
  }, [])

  return (
    <>
      <Header />
      <Flex direction="column">
        <Sidebar>
          {sidebarToggle && <ShoppingCartCard />}
        </Sidebar>
        {loading && <ProductPageSkeleton />}
        {apiError && <ErrorCallout msg={apiError} />}
        {pageData &&
          <>
            <Card mt="3">
              <Flex direction="column">
                <Flex justify="between">
                  <Card variant="ghost" mt="3">
                    <Flex direction={{ initial: "column", md: "row" }}>
                      <Box display={{ initial: "none", md: "block" }} width="120px">
                      </Box>
                      <Box
                        height={{ initial: "300px", md: "450px" }}
                        width={{ initial: "400px", md: "550px" }}
                      >
                        <img
                          src={`/images/products/${pageData.product.slug}.jpeg`}
                          alt={`${pageData.product.slug}`}
                        />
                      </Box>
                      <Box ml="3" maxWidth="500px">
                        <Flex
                          direction="column"
                          justify="start"
                          mt={{ initial: "3", md: "0" }}
                          ml="3"
                          gap="2"
                        >
                          <Heading>{pageData.product.name}</Heading>
                          <Separator size="4" />
                          <Text>
                            {pageData.product.short_description}
                          </Text>
                          <Box maxWidth="300px" mt="3">
                            <Text>Size</Text>
                            <RadioCards.Root
                              defaultValue="1"
                              columns="3"
                            >
                              <RadioCards.Item value="1">
                                <Flex>
                                  <Text>
                                    Var 1
                                  </Text>
                                </Flex>
                              </RadioCards.Item>
                              <RadioCards.Item value="2">
                                <Flex>
                                  <Text>
                                    Var 2
                                  </Text>
                                </Flex>
                              </RadioCards.Item>
                            </RadioCards.Root>
                          </Box>
                          <Flex mt="3">
                            {pageData?.product.variants[0].sale_price &&
                              <Text size="7"><Strong>$ {pageData.product.variants[0].sale_price} </Strong></Text>
                            }
                          </Flex>
                          <Flex direction="column" gap="3" mt="2">
                            <PrimaryButton>
                              <ShoppingBag size="20" />
                              Buy Now</PrimaryButton>
                            <SecondaryButton>
                              {/* <PlusIcon /> */}
                              <ShoppingCart size="20" />
                              Add to cart
                            </SecondaryButton>
                          </Flex>
                        </Flex>
                      </Box>
                    </Flex>
                  </Card>
                </Flex>
              </Flex>
            </Card>
            <Card mt="2">
              <Flex direction="column" justify="between" align="center" maxWidth="80%">
                <Text>
                  {pageData.product.long_description}
                </Text>
                <Text>test</Text>
              </Flex>
            </Card>
          </>}
      </Flex>
    </>
  )
}