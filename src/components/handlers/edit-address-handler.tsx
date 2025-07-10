import { Callout, Flex, Heading } from "@radix-ui/themes";
import { useState } from "react";
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { AddressForm } from "../ui/forms/address-form";
import { AddressFormData } from "../../app/schemas/addressSchema";
import { useRequests } from "../../app/hooks/useRequests";
import { ProfileAddress } from "../../app/types/address";

export function EditAddressHadler(
    {
        id,
        address,
        onSubmit
    }: {
        id: number,
        address: ProfileAddress,
        onSubmit?: () => void
    }) {

    const { editAddress } = useRequests();

    const [apiError, setApiError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    async function handleSubmit(data: AddressFormData) {
        setApiError('');

        const response = await editAddress(id, data)

        if (response.detail) {
            setApiError(response.detail)
            return;
        }

        if (onSubmit) {
            console.log('submited')
            onSubmit();
        }
        setSuccessMsg("Changes saved successfully")
    }

    return (
        <Flex direction="column" gap="2" align="center">
            <Heading>
                Edit Address
            </Heading>
            {apiError &&
                <Callout.Root mb="3" color="red">
                    <Callout.Icon><CrossCircledIcon /></Callout.Icon>
                    <Callout.Text>{apiError}</Callout.Text>
                </Callout.Root>}
            {successMsg &&
                <Callout.Root mb="3" color="green">
                    <Callout.Icon><CheckCircledIcon /></Callout.Icon>
                    <Callout.Text>{successMsg}</Callout.Text>
                </Callout.Root>
            }
            <AddressForm
                onFormChange={() => setSuccessMsg('')}
                defaultValues={address}
                onSubmit={handleSubmit} />
        </Flex>
    )
}