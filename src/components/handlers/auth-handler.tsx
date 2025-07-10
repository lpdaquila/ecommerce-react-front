import { Heading } from "@radix-ui/themes";
import { useState } from "react";
import { useAuth } from "../../app/hooks/useAuth";
import { useNavigate } from "react-router";
import { AuthForm } from "../ui/forms/auth-form";
import { AuthFormData } from "../../app/schemas/authSchema";
import { ErrorCallout } from "../ui/callouts/error-callout";

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
            {apiError && <ErrorCallout msg={apiError} />}
            <AuthForm onSubmit={handleSubmit} />
        </>
    )
}