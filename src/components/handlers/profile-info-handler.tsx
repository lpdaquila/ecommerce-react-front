import { Flex, Heading, Separator, Strong, Text } from "@radix-ui/themes";
import { useState } from "react";
import { Profile } from "../../app/types/auth";

type ProfileCardProps = {
    id: number;
    profile: Profile;
}

export function ProfileInfoHandler({ id, profile }: ProfileCardProps) {
    const [name, setName] = useState(() => profile.name);
    const [email, setEmail] = useState(() => profile.email);
    const [document, setDocument] = useState(() => profile.document ?? 'Not given');
    const [phone, setPhone] = useState(() => profile.phone ?? 'Not given');

    return (
        <Flex direction="column" gap="2">
            <Heading>Profile Info</Heading>
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

        </Flex>
    )
}