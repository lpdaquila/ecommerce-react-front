import { Button, Card, Container, Flex, Separator } from "@radix-ui/themes";
import { Header } from "../components/layouts/public-layout/headers/user-header";
import { useNavigate, useParams } from "react-router";
import { Sidebar } from "../components/layouts/public-layout/sidebar";
import { HomeIcon, InfoCircledIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { ProfileInfoHandler } from "../components/handlers/profile-info-handler";
import { useRequests } from "../app/hooks/useRequests";
import { Profile } from "../app/types/auth";
import { CreateAddressHadler } from "../components/handlers/create-address-handler";
import { EditProfileHandler } from "../components/handlers/edit-profile-hadler";

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
                        {activeView === 'addresses' && <CreateAddressHadler />}
                    </Card>
                </Container>
            </Flex>
        </Flex>
    )
}