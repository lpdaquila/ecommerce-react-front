import { Flex, Heading } from "@radix-ui/themes";
import { useState } from "react";
import { AddressForm } from "../ui/forms/address-form";
import { AddressFormData } from "../../app/schemas/addressSchema";
import { useRequests } from "../../app/hooks/useRequests";
import { SuccessCallout } from "../ui/callouts/success-callout";
import { ErrorCallout } from "../ui/callouts/error-callout";
import { useAuth } from "../../app/hooks/useAuth";

export function CreateAddressHadler({ onSuccess }: { onSuccess: () => void }) {

    const { createAddress } = useRequests();

    const { handleInitUser } = useAuth();

    const [apiError, setApiError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    async function handleSubmit(data: AddressFormData) {
        setApiError('');

        const response = await createAddress(data)

        if (response.detail) {
            if (response.detail.includes("Given token not valid")) {
                await handleInitUser();
            }
            setApiError(response.detail)
            return;
        }

        onSuccess();
        setSuccessMsg("Address added successfully");
    }

    return (
        <Flex direction="column" gap="2" align="center">
            <Heading>
                Add an address
            </Heading>
            {apiError && <ErrorCallout msg={apiError} />}
            {successMsg && <SuccessCallout msg={successMsg} />}
            <AddressForm onFormChange={() => setSuccessMsg('')} onSubmit={handleSubmit} />
        </Flex>
    )
}