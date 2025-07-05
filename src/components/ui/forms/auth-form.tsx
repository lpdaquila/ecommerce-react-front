import { Button, Callout, Flex, Heading, Link, Strong, Text, TextField } from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";
import { useState } from "react";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { useAuth } from "../../../app/hooks/useAuth";
import { useNavigate } from "react-router";

export function AuthForm() {
    const [apiError, setApiError] = useState('');

    const { handleSignIn } = useAuth();

    const navigate = useNavigate();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        setApiError('');

        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const body = Object.fromEntries(formData);

        const response = await handleSignIn(
            body.email as string,
            body.password as string
        );

        if (response.detail) {
            setApiError(`${response.detail}`);
            return;
        }

        console.log(response.data);
        navigate('/')
    }

    return (
        <>
            <Heading
                style={{
                    marginBottom: "10%"
                }}
            >
                Login
            </Heading>
            {apiError &&
                <Callout.Root mb="3" color="red">
                    <Callout.Icon><CrossCircledIcon /></Callout.Icon>
                    <Callout.Text>{apiError}</Callout.Text>
                </Callout.Root>
            }
            <Form.Root
                onSubmit={handleSubmit}
                style={{ width: "300px" }}
            >
                <Form.Field style={{ marginBottom: "5%" }} name="email">
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
                        <Link style={{ color: "var(--accent-8)" }} href="/">
                            <Text size="1">
                                Forgot your password ?
                            </Text>
                        </Link>
                    </Flex>
                </Form.Field>

                <Form.Submit>
                    <Button style={{ width: "300px" }} asChild>
                        <Text>Login</Text>
                    </Button>
                </Form.Submit>
            </Form.Root>
        </>
    )
}