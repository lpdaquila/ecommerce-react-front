import { Button, Container, Text } from "@radix-ui/themes";
import { useNavigate } from "react-router";

export function StoreLogo() {
    const navigate = useNavigate();

    return (
        <Container
            maxWidth="100%"
            mt="6"
            ml="4"
            position={{ md: "relative", lg: "absolute" }}
            display={{ initial: 'none', md: 'initial' }}
        >
            <Button variant="ghost" onClick={() => navigate('/')}>
                <Text size="8">Your Store</Text>
            </Button>
        </Container>
    )
}