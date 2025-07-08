import { Card, Flex, Separator, Strong, Text } from "@radix-ui/themes";
import { useState } from "react";
import PrimaryButton from "../buttons/primary-button";
import { Profile } from "../../../app/types/auth";

type AccountCardProps = {
    id: number;
    profile: Profile;
    onEditProfile: () => void;
}

export function AccountInfoCard({ id, profile, onEditProfile }: AccountCardProps) {
    const [name, setName] = useState(() => profile.name);
    const [email, setEmail] = useState(() => profile.email);
    const [document, setDocument] = useState(() => profile.document ?? 'Not given');
    const [phone, setPhone] = useState(() => profile.phone ?? 'Not given');

    return (
        <Card mt="4" style={{ maxWidth: "400px" }}>
            <Flex direction="column" gap="2">
                <Strong>Name: </Strong>
                <Text>{name}</Text>
                <Separator size="4" />
                <Strong>Email: </Strong>
                <Text>{email}</Text>
                <Separator size="4" />
                <Strong>Document: </Strong>
                <Text>{document}</Text>
                <Separator size="4" />
                <Strong>Phone: </Strong>
                <Text>{phone}</Text>
                <Separator size="4" />
                <PrimaryButton onClick={onEditProfile}>Edit Profile</PrimaryButton>
            </Flex>
        </Card>
    )
}