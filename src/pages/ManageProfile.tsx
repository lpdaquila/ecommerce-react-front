import { Button, Card, Container, Flex, Separator } from "@radix-ui/themes";
import { Header } from "../components/layouts/public-layout/headers/user-header";
import { useNavigate, useParams } from "react-router";
import { Sidebar } from "../components/layouts/public-layout/sidebar";
import { EditProfileForm } from "../components/ui/forms/edit-profile-form";
import { HomeIcon, InfoCircledIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { AccountInfoCard } from "../components/ui/cards/account-info-card";
import { useRequests } from "../app/hooks/useRequests";
import { Profile } from "../app/types/auth";
import { AddAddressCard } from "../components/ui/cards/create-address-card";

type View = 'profile' | 'edit' | 'addresses' | 'preferences'

export default function ManageProfile() {
    const { id: profile_id } = useParams();

    const [errorMsg, setErrorMsg] = useState('');
    const [activeView, setActiveView] = useState<View>('profile')
    const [profile, setProfile] = useState<Profile | null>(null);

    const { getProfile } = useRequests();

    const navigate = useNavigate();

    async function handleGetProfile(id: number) {
        const response = await getProfile(id)

        if (response.detail) {
            if (response.detail === "Authentication credentials were not provided.") {
                navigate('/signin')
            }
            setErrorMsg(response.detail)
            return;
        }

        if (response.data) {
            console.log('chegou', response.data.profile)
            setProfile(response.data.profile)
        }
    }

    useEffect(() => {
        handleGetProfile(Number(profile_id))
    }, [profile_id])

    return (
        <Flex direction="column" position="relative">
            <Header />
            <Flex direction="row">
                <Sidebar>
                    <Card>
                        <Button
                            onClick={() => setActiveView('profile')}
                            mt="3"
                            mb="3"
                            variant="ghost"
                        >
                            <InfoCircledIcon />Account Info
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
                    {activeView === 'profile' && profile && <AccountInfoCard
                        onEditProfile={() => setActiveView('edit')} profile={profile} id={Number(profile_id)}
                    />}
                    {activeView === 'edit' && profile && <EditProfileForm
                        profile={profile} id={Number(profile_id)} />}
                    {activeView === 'addresses' && <AddAddressCard />}
                </Container>
            </Flex>
        </Flex>
    )
}