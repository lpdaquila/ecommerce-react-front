import { Flex, HoverCard, Popover, Text } from "@radix-ui/themes";
import { SecondaryButton } from "../buttons/secondary-button";
import { CircleUserRoundIcon } from "lucide-react";
import { useAuth } from "../../../app/hooks/useAuth";
import PrimaryButton from "../buttons/primary-button";

function ProfileDetail() {
    const { user } = useAuth();
    return (
        <Flex direction="column">
            <PrimaryButton>Edit Profile</PrimaryButton>
            <Text>Email: {user.profile?.email}</Text>
        </Flex>
    )
}

function ProfileName() {
    const { user } = useAuth();
    return (
        <>{user.profile?.name}</>
    )
}

export function ProfileHoverCard() {
    return (
        <HoverCard.Root>
            <HoverCard.Trigger>
                <SecondaryButton>
                    <CircleUserRoundIcon size="17" /><ProfileName />
                </SecondaryButton>
            </HoverCard.Trigger>
            <HoverCard.Content>
                <ProfileDetail />
            </HoverCard.Content>
        </HoverCard.Root>
    )
}

export function ProfilePopover() {
    return (
        <Popover.Root>
            <Popover.Trigger>
                <SecondaryButton>
                    <CircleUserRoundIcon size="17" /><ProfileName />
                </SecondaryButton>
            </Popover.Trigger>
            <Popover.Content>
                <ProfileDetail />
            </Popover.Content>
        </Popover.Root>
    )
}