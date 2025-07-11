import { Box, Card, Flex, Heading, RadioCards, Separator, Strong, Text } from "@radix-ui/themes";
import { useParams } from "react-router";
import Header from "../components/layouts/public-layout/headers/home-header";
import PrimaryButton from "../components/ui/buttons/primary-button";
import { SecondaryButton } from "../components/ui/buttons/secondary-button";
import { ShoppingBag, ShoppingCart } from "lucide-react";

export default function Product() {
  const { slug: product_id } = useParams();

  return (
    <Flex direction="column">
      <Header />
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
                    src="/images/products/smartphone.jpeg"
                    alt="Smartphone"
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
                    <Heading>Product Title</Heading>
                    <Separator size="4" />
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam magni voluptas, ab provident obcaecati, corporis quidem
                      amet quibusdam temporibus, sed incidunt facilis. Beatae dolorem
                      ipsam culpa maiores eveniet tempora earum.
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
                      <Text size="7"><Strong>$ 700.00</Strong></Text>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus et, quam maxime inventore, neque dolore veniam atque
            consequuntur at voluptatum tempore rem nemo alias voluptas sed, doloremque possimus rerum voluptatem.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, dolore provident deleniti debitis dolores quibusdam. Rerum nostrum dicta,
            eveniet quo ipsam natus facilis eos, explicabo voluptate dolor dolorum quisquam aperiam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum unde dignissimos iusto, pariatur voluptate, corporis sequi labore velit ducimus quos, magni minima.
            Ipsa libero nemo impedit facere excepturi earum similique.
          </Text>
          <Text>test</Text>
        </Flex>
      </Card>
    </Flex>
  )
}