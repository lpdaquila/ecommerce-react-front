import { Callout, Flex, Heading } from "@radix-ui/themes";
import { useState } from "react";
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { AddressForm } from "../ui/forms/address-form";
import { AddressFormData } from "../../app/schemas/addressSchema";
import { useRequests } from "../../app/hooks/useRequests";

export function CreateAddressHadler() {

    const { createAddress } = useRequests();

    const [apiError, setApiError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    async function handleSubmit(data: AddressFormData) {
        setApiError('');

        const response = await createAddress(data)

        if (response.detail) {
            setApiError(response.detail)
            return;
        }

        setSuccessMsg("Address added successfully")
    }

    return (
        <Flex direction="column" gap="2" align="center">
            <Heading>
                Add an address
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
            <AddressForm onFormChange={() => setSuccessMsg('')} onSubmit={handleSubmit} />
        </Flex>
    )
}