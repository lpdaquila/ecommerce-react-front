import { Flex, Text } from "@radix-ui/themes";
import { SecondaryButton } from "../buttons/secondary-button";
import { CircleUserRoundIcon } from "lucide-react";
import { useAuth } from "../../../app/hooks/useAuth";
import PrimaryButton from "../buttons/primary-button";
import { ResponsiveCard } from "./responsive-card";
import { useNavigate } from "react-router";
import { ExitIcon, HeartFilledIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";

export function ProfileCard() {
    const { user, handleSignOut } = useAuth();

    const navigate = useNavigate();

    function handleManageProfile(id: number) {
        navigate(`/profile/${id}`)
    }

    return (
        <ResponsiveCard trigger={
            <SecondaryButton>
                <CircleUserRoundIcon size="17" />{user.user?.name}
            </SecondaryButton>}
        >
            <Flex direction="column" gap="3">
                <Text mb="2">Welcome, {user.user?.name}</Text>
                <SecondaryButton style={{ justifyContent: "start" }}>
                    <HeartFilledIcon />Wishlist
                </SecondaryButton>
                <SecondaryButton
                    style={{ justifyContent: "start" }}
                    onClick={() => {
                        if (user.user?.id !== undefined) {
                            handleManageProfile(user.user.id);
                        }
                    }}
                    disabled={user.user?.id === undefined}
                >
                    <MixerHorizontalIcon />
                    Manage Profile
                </SecondaryButton>
                <PrimaryButton
                    onClick={() => handleSignOut()}
                    style={{ justifyContent: "start" }}
                ><ExitIcon />Logout
                </PrimaryButton>
            </Flex>
        </ResponsiveCard>
    )
}