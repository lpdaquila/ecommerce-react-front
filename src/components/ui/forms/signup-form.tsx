import { Button, Callout, Flex, Heading, Strong, Text, TextField } from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";
import { useRef, useState } from "react";
import { useAuth } from "../../../app/hooks/useAuth";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router";

export function SignUpForm() {
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const { handleSignUp } = useAuth();

    const [apiError, setApiError] = useState('');

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        setApiError('');

        const body = Object.fromEntries(
            [...formData.entries()].filter(([key]) => !['pswrd-confirm'].includes(key))
        );

        const response = await handleSignUp(
            body.name as string,
            body.email as string,
            body.password as string
        )

        if (response.detail) {
            setApiError(`${response.detail}`)
            return;
        }

        navigate('/')
    }

    return (
        <>
            <Heading
                style={{
                    marginBottom: "10%"
                }}
            >
                Create an account
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
                    name="name"
                >
                    <Flex gap="5" justify="between">
                        <Form.Label >
                            <Text size="2">
                                <Strong>Your Name</Strong>
                            </Text>
                        </Form.Label>
                        <Form.Message
                            match="valueMissing"
                            style={{
                                color: "var(--red-10)"
                            }}
                        >
                            <Text size="1">Please enter your name</Text>
                        </Form.Message>
                    </Flex>
                    <Form.Control asChild>
                        <TextField.Root
                            placeholder="Enter your name"
                            type="text"
                            required
                        />
                    </Form.Control>
                </Form.Field>
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
                            style={{ color: "var(--red-10)" }}
                        >
                            <Text size="1">Please enter your email</Text>
                        </Form.Message>
                        <Form.Message
                            match="typeMismatch"
                            style={{ color: "var(--red-10)" }}
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
                        <Form.Message
                            match={(value, formData) => value !== formData.get("pswrd-confirm")}
                            style={{ color: "var(--red-10)" }}
                        >
                            <Text size="1">Passwords don't match</Text>
                        </Form.Message>
                    </Flex>
                    <Form.Control asChild>
                        <TextField.Root
                            ref={passwordRef}
                            placeholder="Enter your password"
                            type="password"
                            required
                        />
                    </Form.Control>
                </Form.Field>
                <Form.Field style={{ marginBottom: "5%" }} name="pswrd-confirm">
                    <Flex gap="5" justify="between">
                        <Form.Label >
                            <Text size="2">
                                <Strong>Confirm Password</Strong>
                            </Text>
                        </Form.Label>
                        <Form.Message
                            match="valueMissing"
                            style={{ color: "var(--red-10)" }}
                        >
                            <Text size="1">Confirm your password</Text>
                        </Form.Message>
                        <Form.Message
                            match={(value, formData) => value !== formData.get("password")}
                            style={{ color: "var(--red-10)" }}
                        >
                            <Text size="1">Passwords don't match</Text>
                        </Form.Message>
                    </Flex>
                    <Form.Control asChild>
                        <TextField.Root
                            ref={confirmRef}
                            placeholder="Confirm your password"
                            type="password"
                            required
                        />
                    </Form.Control>
                </Form.Field>

                <Form.Submit>
                    <Button style={{ width: "300px" }} asChild>
                        <Text>Create account</Text>
                    </Button>
                </Form.Submit>
            </Form.Root>
        </>
    )
}