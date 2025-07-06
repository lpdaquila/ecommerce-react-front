import { Flex, Text } from "@radix-ui/themes";
import { SecondaryButton } from "../buttons/secondary-button";
import { CircleUserRoundIcon } from "lucide-react";
import { useAuth } from "../../../app/hooks/useAuth";
import PrimaryButton from "../buttons/primary-button";
import { ResponsiveCard } from "./responsive-card";

export function ProfileCard() {
    const { user } = useAuth();
    return (
        <ResponsiveCard trigger={
            <SecondaryButton>
                <CircleUserRoundIcon size="17" />{user.profile?.name}
            </SecondaryButton>}
        >
            <Flex direction="column">
                <Text mb="2">Welcome, {user.profile?.name}</Text>
                <PrimaryButton>Edit Profile</PrimaryButton>
            </Flex>
        </ResponsiveCard>
    )
}