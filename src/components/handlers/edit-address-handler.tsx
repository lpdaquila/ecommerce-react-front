import { Flex, Heading } from "@radix-ui/themes";
import { useState } from "react";
import { AddressForm } from "../ui/forms/address-form";
import { AddressFormData } from "../../app/schemas/addressSchema";
import { useRequests } from "../../app/hooks/useRequests";
import { ProfileAddress } from "../../app/types/address";
import { SuccessCallout } from "../ui/callouts/success-callout";
import { ErrorCallout } from "../ui/callouts/error-callout";
import { useRefreshToken } from "../../app/hooks/useRefreshToken";

export function EditAddressHadler(
    {
        id,
        address,
        onSuccess
    }: {
        id: number,
        address: ProfileAddress,
        onSuccess: () => void
    }) {

    const { editAddress } = useRequests();
    const { handleNeedTokenRefresh } = useRefreshToken();

    const [apiError, setApiError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const handleSubmit = async (data: AddressFormData) => {
        setApiError('');

        const response = await editAddress(id, data)

        if (response.detail) {
            handleNeedTokenRefresh(response.detail)
            setApiError(response.detail)
            return;
        }

        onSuccess();
        setSuccessMsg("Changes saved successfully");
    }

    return (
        <Flex direction="column" gap="2" align="center">
            <Heading>
                Edit Address
            </Heading>
            {apiError && <ErrorCallout msg={apiError} />}
            {successMsg && <SuccessCallout msg={successMsg} />}
            <AddressForm
                onFormChange={() => setSuccessMsg('')}
                defaultValues={address}
                onSubmit={handleSubmit} />
        </Flex>
    )
}