import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { Button, Callout, Card, Flex, Heading, Strong, Text, TextField } from "@radix-ui/themes";
import { Form } from "radix-ui";
import React, { useEffect, useState } from "react";
import { useRequests } from "../../../app/hooks/useRequests";
import { Profile } from "../../../app/types/auth";

export function EditProfileForm({ id, profile, errorMsg }: { id: number, profile: Profile, errorMsg?: string }) {
    const [apiError, setApiError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [requestLoading, setRequestLoading] = useState(true);

    const { editProfile } = useRequests();

    const [name, setName] = useState(() => profile.name);
    const [email, setEmail] = useState(() => profile.email);
    const [document, setDocument] = useState(() => profile.document ?? '');
    const [phone, setPhone] = useState(() => profile.phone ?? '');

    if (errorMsg) {
        setApiError(errorMsg);
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        setApiError('');

        const body = Object.fromEntries(formData);

        const response = await editProfile(
            id, {
            name: body.name?.toString(),
            email: body.email?.toString(),
            document: body.document?.toString(),
            phone: body.phone?.toString(),
        }
        )

        if (response.detail) {
            setApiError(`${response.detail}`)
            return;
        }

        setSuccessMsg("Changes saved successfuly")
    }

    return (
        <Card
            mt="4"
            style={{
                maxWidth: "400px"
            }}
        >
            <Flex direction="column" justify="center" align="center">
                <Heading
                    style={{
                        marginTop: "5%",
                        marginBottom: "10%"
                    }}
                >
                    Edit Profile
                </Heading>
                {apiError &&
                    <Callout.Root mb="3" color="red">
                        <Callout.Icon><CrossCircledIcon /></Callout.Icon>
                        <Callout.Text>{apiError}</Callout.Text>
                    </Callout.Root>
                }
                {successMsg &&
                    <Callout.Root mb="3" color="green">
                        <Callout.Icon><CheckCircledIcon /></Callout.Icon>
                        <Callout.Text>{successMsg}</Callout.Text>
                    </Callout.Root>
                }
                <Form.Root
                    onSubmit={handleSubmit}
                    style={{ width: "300px" }}
                >
                    <Form.Field style={{ marginBottom: "5%" }} name="name">
                        <Flex gap="5" justify="between">
                            <Form.Label >
                                <Text size="2">
                                    <Strong>Name</Strong>
                                </Text>
                            </Form.Label>
                            <Form.Message
                                match={(value, _formData) => value == ''}
                                style={{ color: "var(--red-10)" }}
                            >
                                <Text size="1">Please enter your name</Text>
                            </Form.Message>
                        </Flex>
                        <Form.Control asChild>
                            <TextField.Root
                                value={name ?? ''}
                                onChange={(e) => { setName(e.target.value); setSuccessMsg(''); }}
                                placeholder="Enter your name"
                                type="text"
                            />
                        </Form.Control>
                    </Form.Field>
                    <Form.Field style={{ marginBottom: "5%" }} name="email">
                        <Flex gap="5" justify="between">
                            <Form.Label >
                                <Text size="2">
                                    <Strong>Email</Strong>
                                </Text>
                            </Form.Label>
                            <Form.Message
                                match={(value, _formData) => value == ''}
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
                                value={email ?? ''}
                                onChange={(e) => { setEmail(e.target.value); setSuccessMsg(''); }}
                                placeholder="Enter your email"
                                type="email"
                            />
                        </Form.Control>
                    </Form.Field>
                    <Form.Field style={{ marginBottom: "5%" }} name="document">
                        <Flex gap="5" justify="between">
                            <Form.Label >
                                <Text size="2">
                                    <Strong>Document</Strong>
                                </Text>
                            </Form.Label>
                        </Flex>
                        <Form.Control asChild>
                            <TextField.Root
                                value={document ?? ''}
                                onChange={(e) => { setDocument(e.target.value); setSuccessMsg(''); }}
                                placeholder="XXX.XXX.XXX-XX"
                                type="text"
                            />
                        </Form.Control>
                    </Form.Field>
                    <Form.Field style={{ marginBottom: "5%" }} name="phone">
                        <Flex gap="5" justify="between">
                            <Form.Label >
                                <Text size="2">
                                    <Strong>Phone</Strong>
                                </Text>
                            </Form.Label>
                        </Flex>
                        <Form.Control asChild>
                            <TextField.Root
                                value={phone ?? ''}
                                onChange={(e) => { setPhone(e.target.value); setSuccessMsg(''); }}
                                placeholder="(XX) XXXXX-XXXX"
                                type="text"
                            />
                        </Form.Control>
                    </Form.Field>

                    <Form.Submit>
                        <Button mt="5" mb="2" style={{ width: "300px" }} asChild>
                            <Text>Submit</Text>
                        </Button>
                    </Form.Submit>
                </Form.Root>
            </Flex>
        </Card>
    )
}