import { Box, Card, Container, Flex, Grid, Heading, Separator, Text } from "@radix-ui/themes";
import { StoreLogo } from "../components/ui/logos/store-logo";
import { useState } from "react";
import { SecondaryButton } from "../components/ui/buttons/secondary-button";
import { AuthForm } from "../components/ui/forms/auth-form";
import { SignUpForm } from "../components/ui/forms/signup-form";
import { ChangeThemeBtn } from "../components/ui/buttons/change-theme-button";
import { HelpButton } from "../components/ui/buttons/help-button";

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
            <header
                className="header"
            >
                <Flex direction="row"
                    justify="between"
                    align="center">
                    <Box style={{ marginBottom: "100px" }}>
                        <StoreLogo />
                    </Box>
                    <Flex direction="row" align="end" justify="end" mr="3">
                        <HelpButton />
                        <ChangeThemeBtn />
                    </Flex>
                </Flex>
            </header>
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
                            isAuthForm ? <AuthForm /> : <SignUpForm />
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
