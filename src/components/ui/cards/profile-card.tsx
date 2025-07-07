import { Flex, Text } from "@radix-ui/themes";
import { SecondaryButton } from "../buttons/secondary-button";
import { CircleUserRoundIcon } from "lucide-react";
import { useAuth } from "../../../app/hooks/useAuth";
import PrimaryButton from "../buttons/primary-button";
import { ResponsiveCard } from "./responsive-card";
import { useNavigate } from "react-router";

export function ProfileCard() {
    const { user } = useAuth();

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
            <Flex direction="column">
                <Text mb="2">Welcome, {user.user?.name}</Text>
                <PrimaryButton
                    onClick={() => {
                        if (user.user?.id !== undefined) {
                            handleManageProfile(user.user.id);
                        }
                    }}
                    disabled={user.user?.id === undefined}
                >
                    Manage Profile
                </PrimaryButton>
            </Flex>
        </ResponsiveCard>
    )
}