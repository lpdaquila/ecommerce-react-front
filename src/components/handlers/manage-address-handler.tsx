import { useEffect, useState } from "react"
import { Button, Flex, Heading, IconButton, Select, Separator, Text } from "@radix-ui/themes";
import { ProfileAddress } from "../../app/types/address";
import PrimaryButton from "../ui/buttons/primary-button";
import { ArrowLeftIcon, Pencil1Icon, PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { CreateAddressHadler } from "./create-address-handler";
import { EditAddressHadler } from "./edit-address-handler";
import { SecondaryButton } from "../ui/buttons/secondary-button";
import { Dialog } from "../ui/dialogs/alert-dialog";
import { useRequests } from "../../app/hooks/useRequests";
import { ErrorCallout } from "../ui/callouts/error-callout";
import { SuccessCallout } from "../ui/callouts/success-callout";

type View = 'view' | 'create' | 'edit'

type Props = {
    addressList: ProfileAddress[];
    onRefresh: () => void;
}

export function ManageAddressHandler({ addressList, onRefresh }: Props) {
    const [activeView, setActiveView] = useState<View>('view');

    const [selectedId, setSelectedId] = useState('');
    const [apiError, setApiError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const { deleteAddress } = useRequests();

    async function handleDeleteAddress(id: number) {
        setApiError('');
        const response = await deleteAddress(id);

        if (response.detail) {
            setApiError(response.detail);
            return;
        }
        setSuccessMsg("Address deleted successfully")
    }

    useEffect(() => {
        if (addressList && Array.isArray(addressList)) {
            setSelectedId(addressList[0]?.id?.toString());
        }
    }, [])

    const selectedAddress = addressList.find(addr => addr.id === +selectedId)

    return (
        <>
            {activeView === 'view' &&
                <>
                    <Heading as="h3">Addresses</Heading>
                    <Text>Manage your delivery addresses</Text>
                    <Separator size="4" mb="3" />
                    {addressList.length > 0 && selectedId &&
                        <Flex gap="2">
                            <Select.Root
                                value={selectedId}
                                onValueChange={setSelectedId}
                                onOpenChange={() => setSuccessMsg('')}
                            >
                                <Select.Trigger>
                                    {selectedAddress?.address_name}
                                </Select.Trigger>
                                <Select.Content>
                                    <Select.Group>
                                        {addressList.map(addr => (
                                            <Select.Item key={addr.id} value={addr.id.toString()}>
                                                {addr.address_name}
                                            </Select.Item>
                                        ))}
                                    </Select.Group>
                                </Select.Content>
                            </Select.Root>
                            <IconButton
                                variant="soft"
                                onClick={() => setActiveView('create')}
                            ><PlusIcon /></IconButton>
                        </Flex>}
                    {apiError && <ErrorCallout msg={apiError} />}
                    {successMsg && <SuccessCallout msg={successMsg} />}
                    {selectedAddress &&
                        <>
                            <Flex direction="column" gap="1" mt="2">
                                <Text>{selectedAddress.address_name}</Text>
                                <Text>{selectedAddress.address}, {selectedAddress.number}</Text>
                                <Text>{selectedAddress.complement}</Text>
                                <Text>{selectedAddress.district}</Text>
                                <Text>{selectedAddress.city}</Text>
                                <Text>{selectedAddress.state}</Text>
                                <Text>{selectedAddress.zip_code}</Text>
                                <Separator size="4" />
                            </Flex>
                            <Flex direction="row" justify="center" align="center" gap="2">
                                <SecondaryButton
                                    mt="2"
                                    onClick={() => setActiveView('edit')}
                                >

                                    <Pencil1Icon />Edit Address
                                </SecondaryButton>
                                <Dialog
                                    trigger={
                                        <PrimaryButton mt="2" color="red">
                                            <TrashIcon />Delete Address
                                        </PrimaryButton>
                                    }
                                    title="Delete Address?"
                                    description="This action cannot be undone, 
                                    Are you sure you want to delete this address?"
                                    actionText="Delete Address"
                                    onConfirm={() => {
                                        handleDeleteAddress(selectedAddress.id);
                                        onRefresh();
                                    }}
                                />

                            </Flex>
                        </>}
                </>}
            {activeView === 'create' &&
                <>
                    <Button
                        variant="soft"
                        onClick={() => setActiveView('view')}
                    >
                        <ArrowLeftIcon />
                    </Button>
                    <CreateAddressHadler onSuccess={() => onRefresh()} />
                </>}
            {activeView === 'edit' && selectedAddress &&
                <>
                    <Button
                        variant="soft"
                        onClick={() => setActiveView('view')}
                    >
                        <ArrowLeftIcon />
                    </Button>
                    <EditAddressHadler
                        id={+selectedId}
                        address={selectedAddress}
                        onSuccess={() => onRefresh()}
                    />
                </>}
        </>
    )
}