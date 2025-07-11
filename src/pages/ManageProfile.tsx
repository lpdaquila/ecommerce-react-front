import { Button, Card, Container, Flex, Separator } from "@radix-ui/themes";
import { Header } from "../components/layouts/public-layout/headers/user-header";
import { useParams } from "react-router";
import { Sidebar } from "../components/layouts/public-layout/sidebar";
import { HomeIcon, InfoCircledIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { ProfileInfoHandler } from "../components/handlers/profile-info-handler";
import { useRequests } from "../app/hooks/useRequests";
import { Profile } from "../app/types/auth";
import { EditProfileHandler } from "../components/handlers/edit-profile-hadler";
import { ProfileAddress } from "../app/types/address";
import { ManageAddressHandler } from "../components/handlers/manage-address-handler";
import { useRefreshToken } from "../app/hooks/useRefreshToken";

type View = 'profile' | 'edit' | 'addresses' | 'preferences'

export default function ManageProfile() {
    const { id: profile_id } = useParams();

    const [apiError, setApiError] = useState('');
    const [activeView, setActiveView] = useState<View>('profile')

    const [profile, setProfile] = useState<Profile | null>(null);
    const [addressList, setAddressList] = useState<ProfileAddress[]>([]);

    const [refreshAddress, setRefreshAddress] = useState(false);

    const { getProfile, getAddresses } = useRequests();
    const { handleNeedTokenRefresh } = useRefreshToken();

    const handleGetProfile = async (id: number) => {
        const response = await getProfile(id)

        if (response.detail) {
            handleNeedTokenRefresh(response.detail)
            setApiError(response.detail)
            return;
        }

        if (response.data) {
            setProfile(response.data.profile)
        }
    }

    const handleGetAdresses = async () => {
        setApiError('');

        const response = await getAddresses();

        if (response.detail) {
            handleNeedTokenRefresh(response.detail)
            setApiError(response.detail);
            return [];
        }

        const addressesList = Array.isArray(response.data?.addresses)
            ? response.data.addresses
            : [];
        return addressesList;
    }

    const fetchAddresses = async () => {
        const data = await handleGetAdresses();
        if (data && Array.isArray(data)) {
            setAddressList(data);
        }
    }

    useEffect(() => {
        handleGetProfile(Number(profile_id));
        fetchAddresses();
    }, [profile_id])

    useEffect(() => {
        fetchAddresses();
    }, [refreshAddress])

    return (
        <Flex direction="column" position="relative">
            <Header />
            <Flex direction="row">
                <Sidebar>
                    <Card mr="4">
                        <Button
                            onClick={() => setActiveView('profile')}
                            mt="3"
                            mb="3"
                            variant="ghost"
                        >
                            <InfoCircledIcon />Profile Info
                        </Button>
                        <Separator size="4" />
                        <Button
                            mt="3"
                            mb="3"
                            variant="ghost"
                            onClick={() => setActiveView('addresses')}
                        ><HomeIcon />Addresses</Button>
                        <Separator size="4" />
                        <Button mt="3" mb="3" variant="ghost"><MixerHorizontalIcon />Preferences</Button>
                        <Separator size="4" />
                    </Card>
                </Sidebar>
                <Container>
                    <Card
                        mt="4"
                        style={{
                            maxWidth: "400px"
                        }}
                    >
                        {activeView === 'profile' && profile && <ProfileInfoHandler
                            onEditProfile={() => setActiveView('edit')} profile={profile} id={Number(profile_id)}
                        />}
                        {activeView === 'edit' && profile && <EditProfileHandler
                            profile={profile} id={Number(profile_id)} />}
                        {activeView === 'addresses' &&
                            <ManageAddressHandler
                                onRefresh={() => setRefreshAddress(!refreshAddress)}
                                addressList={addressList}
                            />}
                    </Card>
                </Container>
            </Flex>
        </Flex>
    )
}