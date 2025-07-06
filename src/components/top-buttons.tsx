import { Card } from "@radix-ui/themes";
import { useAuth } from "../app/hooks/useAuth";
import { LoginButton } from "./ui/buttons/login-button";
import { ProfileCard } from "./ui/cards/profile-card";
import { ChangeThemeBtn } from "./ui/buttons/change-theme-button";

type Props = {
    isMedia?: boolean;
}

export function TopButtons({ isMedia = false }: Props) {

    const { isLogged } = useAuth();

    return (
        <Card
            mt="2"
            style={{ justifySelf: `${isMedia ? "start" : "end"}` }}
            variant="ghost"
            size="2"
            mb="2"
        >
            {isLogged ? <ProfileCard /> :
                <LoginButton />}
            <ChangeThemeBtn />
        </Card>
    )
}