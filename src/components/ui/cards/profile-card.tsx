import { Flex, HoverCard, Text } from "@radix-ui/themes";
import { SecondaryButton } from "../buttons/secondary-button";
import { CircleUserRoundIcon } from "lucide-react";
import { useAuth } from "../../../app/hooks/useAuth";
import PrimaryButton from "../buttons/primary-button";
import { useEffect } from "react";

export function ProfileCard() {
    const { user, handleInitUser } = useAuth();

    useEffect(() => {
        async function authenticateUser() {
            await handleInitUser();
        }
        authenticateUser();
    }, [])

    return (
        <HoverCard.Root>
            <HoverCard.Trigger>
                <SecondaryButton>
                    <CircleUserRoundIcon size="17" />{user.profile?.name}
                </SecondaryButton>
            </HoverCard.Trigger>
            <HoverCard.Content>
                <Flex direction="column">
                    <PrimaryButton>Edit Profile</PrimaryButton>
                    <Text>Email: {user.profile?.email}</Text>
                </Flex>
            </HoverCard.Content>
        </HoverCard.Root>
    )
}