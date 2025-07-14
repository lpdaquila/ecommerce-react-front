import { Box, Card, Flex, Heading, Skeleton, Text } from "@radix-ui/themes";

export function ProductPageSkeleton() {
    return (
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
                                    <Text>
                                        <Skeleton>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam doloremque
                                            sint quam similique tenetur esse amet maiores sit illum corrupti, totam laboriosam
                                            incidunt deserunt,
                                            pariatur voluptatem nostrum velit! Magni!
                                        </Skeleton>
                                    </Text>
                                </Box>
                                <Box ml="3" maxWidth="500px">
                                    <Flex
                                        direction="column"
                                        justify="start"
                                        mt={{ initial: "3", md: "0" }}
                                        ml="3"
                                        gap="2"
                                    >
                                        <Heading><Skeleton>Lorem, ipsum dolor.</Skeleton></Heading>
                                        <Text>
                                            <Skeleton>Lorem ipsum dolor sit amet.</Skeleton>
                                        </Text>
                                        <Box maxWidth="300px" mt="3">
                                            <Text><Skeleton>Lorem, ipsum dolor.</Skeleton></Text>
                                        </Box>
                                        <Flex mt="3">
                                            <Text size="7"><Skeleton>Lorem, ipsum dolor.</Skeleton></Text>
                                        </Flex>
                                        <Flex direction="column" gap="3" mt="2">
                                            <Text><Skeleton>Lorem ipsum dolor sit.</Skeleton></Text>
                                            <Text><Skeleton>Lorem ipsum dolor sit.</Skeleton></Text>
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
                        <Skeleton>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fuga commodi doloribus, provident vero illum quisquam cumque. Dolorum possimus magni optio reprehenderit vitae amet, doloribus, ducimus totam unde laborum porro?</Skeleton>
                    </Text>
                </Flex>
            </Card>
        </>
    )
}