import { Box, Button, Card, Container, Flex, Grid, Heading, Link, Separator, Strong, Text, TextField } from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";
import { StoreLogo } from "../components/ui/logos/store-logo";
import PrimaryButton from "../components/ui/buttons/primary-button";

export default function SignIn() {
    return (
        <Flex
            position="relative"
            direction="column"
        >
            <header
                className="header"
            >
                <Flex
                    position="relative"
                    mb="6%"
                >
                    <StoreLogo />
                </Flex>
            </header>
            <Separator orientation="horizontal" size="4" />
            <Grid columns={{ initial: "1", md: "2" }}
                style={{
                    backgroundImage: "url('/images/static/bg.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: "100%",
                    height: "100%"
                }}
            >
                <Container
                    align="center"
                >
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
                        <Heading
                            style={{
                                marginBottom: "10%"
                            }}
                        >
                            Sign In
                        </Heading>
                        <Form.Root onSubmit={() => console.log('submitou')} style={{ width: "300px" }}>
                            <Form.Field
                                style={{
                                    marginBottom: "5%"
                                }}
                                name="email"
                            >
                                <Flex gap="5" justify="between">
                                    <Form.Label >
                                        <Text size="2">
                                            <Strong>Email</Strong>
                                        </Text>
                                    </Form.Label>
                                    <Form.Message
                                        match="valueMissing"
                                        style={{
                                            color: "var(--red-10)"
                                        }}
                                    >
                                        <Text size="1">Please enter your email</Text>
                                    </Form.Message>
                                    <Form.Message
                                        match="typeMismatch"
                                        style={{
                                            color: "var(--red-10)"
                                        }}
                                    >
                                        <Text size="1">Please provide a valid email</Text>
                                    </Form.Message>
                                </Flex>
                                <Form.Control asChild>
                                    <TextField.Root
                                        placeholder="Enter your email"
                                        type="email"
                                        required
                                    />
                                </Form.Control>
                            </Form.Field>
                            <Form.Field style={{ marginBottom: "5%" }} name="password">
                                <Flex gap="5" justify="between">
                                    <Form.Label >
                                        <Text size="2">
                                            <Strong>Password</Strong>
                                        </Text>
                                    </Form.Label>
                                    <Form.Message
                                        match="valueMissing"
                                        style={{ color: "var(--red-10)" }}
                                    >
                                        <Text size="1">Please give a password</Text>
                                    </Form.Message>
                                </Flex>
                                <Form.Control asChild>
                                    <TextField.Root
                                        placeholder="Enter your password"
                                        type="password"
                                        required
                                    />
                                </Form.Control>
                                <Flex direction="column" align="end">
                                    <Link style={{ color: "var(--accent-7)" }} href="#">
                                        <Text size="1">
                                            Forgot your password ?
                                        </Text>
                                    </Link>
                                </Flex>
                            </Form.Field>

                            <Form.Submit>
                                <Button style={{ width: "300px" }} asChild>
                                    <Text>Sign In</Text>
                                </Button>
                            </Form.Submit>
                        </Form.Root>
                        <Flex direction="column" gap="3" mt="3">
                            <Text align="center">OR</Text>
                            <Text align="left" size="1">Do not have an account ?</Text>
                            <PrimaryButton style={{ width: "300px" }}>
                                Sign Up
                            </PrimaryButton>
                        </Flex>
                    </Card>
                </Container>
            </Grid>
        </Flex>
    )
}
