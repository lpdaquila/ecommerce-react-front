import { Box, Card, Container, Flex, Grid, Heading, Separator, Text } from "@radix-ui/themes";
import { useState } from "react";
import { SecondaryButton } from "../components/ui/buttons/secondary-button";
import { Header } from "../components/layouts/public-layout/headers/user-header";
import { AuthHandler } from "../components/handlers/auth-handler";
import { SignUpHandler } from "../components/handlers/signup-handler";

export default function SignIn() {
    const [isAuthForm, setIsAuthForm] = useState(true);

    return (
        <Flex
            position="relative"
            direction="column"
        // style={{
        //     backgroundImage: "url('/images/static/bg.jpg')",
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'relative',
        //     width: "100%",
        //     height: "100%"
        // }}
        >
            <Header />
            <Separator orientation="horizontal" size="4" />
            <Grid columns={{ initial: "1", md: "2" }}>
                <Container align="center">
                    <Box
                        pt="9"
                        style={{
                            justifySelf: "center"
                        }}
                    >
                        <Heading>Digit your email and Sign In</Heading>
                    </Box>
                </Container>
                <Container>
                    <Card
                        size="5"
                        mt="9"
                        style={{
                            justifySelf: "center",
                            padding: "10%"
                        }}
                    >
                        {
                            isAuthForm ? <AuthHandler /> : <SignUpHandler />
                        }

                        <Flex direction="column" gap="3" mt="3">
                            <Text align="center">OR</Text>
                            <Text align="left" size="1">
                                {isAuthForm ? " Do not have an account ?" : "Already have an account ?"}
                            </Text>
                            <SecondaryButton onClick={() => setIsAuthForm(!isAuthForm)} style={{ width: "300px" }}>
                                {isAuthForm ? "Create an account" : "Login"}
                            </SecondaryButton>
                        </Flex>
                    </Card>
                </Container>
            </Grid>
        </Flex>
    )
}
