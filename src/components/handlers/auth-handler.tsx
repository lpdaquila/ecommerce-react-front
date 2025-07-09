import { Callout, Heading } from "@radix-ui/themes";
import { useState } from "react";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { useAuth } from "../../app/hooks/useAuth";
import { useNavigate } from "react-router";
import { AuthForm } from "../ui/forms/auth-form";
import { AuthFormData } from "../../app/schemas/authSchema";

export function AuthHandler() {
    const [apiError, setApiError] = useState('');

    const { handleSignIn } = useAuth();

    const navigate = useNavigate();

    async function handleSubmit(data: AuthFormData) {
        setApiError('');

        const response = await handleSignIn(
            data.email,
            data.password
        );

        if (response.detail) {
            setApiError(response.detail);
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
                Login
            </Heading>
            {apiError &&
                <Callout.Root mb="3" color="red">
                    <Callout.Icon><CrossCircledIcon /></Callout.Icon>
                    <Callout.Text>{apiError}</Callout.Text>
                </Callout.Root>
            }
            <AuthForm onSubmit={handleSubmit} />
        </>
    )
}