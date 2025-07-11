import { Heading } from "@radix-ui/themes";
import { useState } from "react";
import { useAuth } from "../../app/hooks/useAuth";
import { useNavigate } from "react-router";
import { SignUpFormData } from "../../app/schemas/signupSchema";
import { SignUpForm } from "../ui/forms/signup-form";
import { ErrorCallout } from "../ui/callouts/error-callout";

export function SignUpHandler() {
    const navigate = useNavigate();

    const { handleSignUp } = useAuth();

    const [apiError, setApiError] = useState('');

    const handleSubmit = async (data: SignUpFormData) => {
        setApiError('');

        const response = await handleSignUp(
            data.name,
            data.email,
            data.password
        )

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
                Create an account
            </Heading>
            {apiError && <ErrorCallout msg={apiError} />}
            <SignUpForm onSubmit={handleSubmit} />
        </>
    )
}