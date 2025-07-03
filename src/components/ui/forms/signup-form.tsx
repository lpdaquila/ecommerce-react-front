import { Button, Flex, Heading, Strong, Text, TextField } from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";
import { useRef, useState } from "react";

export function SignUpForm() {
    const apiError = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmRef = useRef<HTMLInputElement>(null);


    function handlePasswordCheck() {
        const mismatch = passwordRef.current?.value !== confirmRef.current?.value;

        confirmRef.current?.setCustomValidity(
            mismatch ? 'Passwords do not match' : ''
        )

        return mismatch;
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        apiError.current?.setCustomValidity('');

        if (passwordRef.current?.value !== confirmRef.current?.value) {

            return;
        }

        const body = Object.fromEntries(
            [...formData.entries()].filter(([key]) => !['pswrd-confirm', 'error'].includes(key))
        );

        const error = "error";

        if (error) {
            console.log('erro da api antes: ', apiError.current?.validationMessage)
            apiError.current?.setCustomValidity(`${error}`)
            console.log('e:', error)
            console.log('erro da api depois: ', apiError.current?.validationMessage)
            return;
        }

        return console.log(body);
    }
    // const [errorMsg, setErrorMsg] = useState('asd');

    return (
        <>
            <Heading
                style={{
                    marginBottom: "10%"
                }}
            >
                Create an account
            </Heading>
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
                        <Form.Message
                            match={(value, formData) => apiError.current?.validationMessage !== undefined}
                            style={{ color: "var(--red-10)" }}
                        >
                            <Text size="1">Email already in use</Text>
                        </Form.Message>
                    </Flex>
                    <Form.Control asChild>
                        <TextField.Root
                            ref={apiError}
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
                            match={(_value, _formData) => handlePasswordCheck()}
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
                            match={(_value, _formData) => handlePasswordCheck()}
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
                        <Text>Create account</Text>
                    </Button>
                </Form.Submit>
            </Form.Root>
            <Text>Email already in use</Text>
        </>
    )
}