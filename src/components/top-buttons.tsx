import { Card, IconButton, Separator } from "@radix-ui/themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";

import { useAuth } from "../app/hooks/useAuth";
import { LoginButton } from "./ui/buttons/login-button";
import { ProfileCard } from "./ui/cards/profile-card";

type Props = {
    isMedia?: boolean;
}

export function TopButtons({ isMedia = false }: Props) {
    const { theme, toggleTheme } = useContext(ThemeContext)

    const { isLogged } = useAuth();

    return (
        <>
            <Card
                mt="2"
                style={{ justifySelf: `${isMedia ? "start" : "end"}` }}
                variant="ghost"
                size="2"
                mb="2"
            >
                {isLogged ?
                    <ProfileCard /> :
                    <LoginButton />
                }
                <IconButton
                    ml="2"
                    variant="soft"
                    size="2"
                    onClick={toggleTheme}
                >
                    {theme === "light" ? <SunIcon /> : <MoonIcon />}
                </IconButton>
            </Card>
            <Separator size="4" />
        </>
    )
}