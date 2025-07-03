import { Button, Callout, Flex, Heading, Link, Strong, Text, TextField } from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";
import { useState } from "react";
import { CrossCircledIcon } from "@radix-ui/react-icons";

export function AuthForm() {
    const [apiError, setApiError] = useState('');

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        setApiError('');

        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        formData.delete('error')
        const body = Object.fromEntries(formData);

        const error = "Incorrect email or password";

        if (error) {
            setApiError(error);
            return;
        }

        return console.log(body);
    }

    return (
        <>
            <Heading
                style={{
                    marginBottom: "10%"
                }}
            >
                Sign in
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
                        <Link style={{ color: "var(--accent-7)" }} href="/">
                            <Text size="1">
                                Forgot your password ?
                            </Text>
                        </Link>
                    </Flex>
                </Form.Field>
                <Form.Field name="error">
                    <Form.Control asChild>
                        <input type="hidden" />
                    </Form.Control>
                    <Form.Message
                        match="badInput"
                        style={{ color: "var(--red-10)" }}
                    >
                        <Text size="1"> errr</Text>
                    </Form.Message>
                </Form.Field>
                <Form.Submit>
                    <Button style={{ width: "300px" }} asChild>
                        <Text>Sign in</Text>
                    </Button>
                </Form.Submit>
            </Form.Root>
        </>
    )
}