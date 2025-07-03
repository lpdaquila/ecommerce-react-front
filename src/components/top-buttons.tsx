import { Card, IconButton, Separator } from "@radix-ui/themes";
import { SecondaryButton } from "./ui/buttons/secondary-button";
import { MoonIcon, PersonIcon, SunIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";
import { useNavigate } from "react-router";

type Props = {
    isMedia?: boolean;
}

export function TopButtons({ isMedia = false }: Props) {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const navigate = useNavigate();

    return (
        <>
            <Card
                mt="2"
                style={{ justifySelf: `${isMedia ? "start" : "end"}` }}
                variant="ghost"
                size="2">
                <SecondaryButton
                    mb="2"
                    onClick={() => navigate('/signin')}>
                    <PersonIcon />Sign In
                </SecondaryButton>
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