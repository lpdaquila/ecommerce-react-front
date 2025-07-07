import { Card, Container, Flex } from "@radix-ui/themes";
import { Header } from "../components/layouts/public-layout/headers/user-header";
import { useParams } from "react-router";
import { Sidebar } from "../components/layouts/public-layout/sidebar";
import { EditProfileForm } from "../components/ui/forms/edit-profile-form";

export default function ManageProfile() {
    const { id: profile_id } = useParams();

    return (
        <Flex direction="column" position="relative">
            <Header />
            <Container>
                <Sidebar>
                    test
                </Sidebar>
            </Container>
            <Container>
                <Card style={{
                    justifyItems: "center",
                    maxWidth: "400px"
                }}>
                    <EditProfileForm id={Number(profile_id)} />
                </Card>
            </Container>
        </Flex>
    )
}