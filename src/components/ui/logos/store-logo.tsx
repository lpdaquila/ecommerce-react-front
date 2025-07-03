import { Container, Text } from "@radix-ui/themes";

export function StoreLogo() {
    return (
        <Container
            maxWidth="100%"
            mt="6"
            ml="4"
            position={{ md: "relative", lg: "absolute" }}
            display={{ initial: 'none', md: 'initial' }}
        >
            <Text size="8">Your Store</Text>
        </Container>
    )
}