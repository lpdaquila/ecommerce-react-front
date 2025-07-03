import { Card, Grid, IconButton } from "@radix-ui/themes";
import PrimaryButton from "./ui/buttons/primary-button";
import { PersonIcon } from "@radix-ui/react-icons";
import { MoonIcon, ShoppingCart, SunIcon } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";

type Props = {
    isMedia?: boolean;
}

export function SideGrid({ isMedia = false }: Props) {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <Grid
            mt="3"
            mr="1"
            columns="1"
            display={{ initial: `${isMedia ? "grid" : "none"}`, sm: 'grid' }}
        >
            <Card variant="ghost" size="2">
                <PrimaryButton
                    mb="2"
                    onClick={() => console.log('click')}>
                    <PersonIcon />Sign In
                </PrimaryButton>
                <IconButton
                    ml="2"
                    variant="soft"
                    size="2"
                    onClick={toggleTheme}
                >
                    {theme === "light" ? <SunIcon /> : <MoonIcon />}
                </IconButton>
            </Card>
            <Card variant="ghost" size="2">
                <PrimaryButton mr="2" style={{ width: `${isMedia ? "57%" : "100%"}` }}>
                    <ShoppingCart size={20} />Cart
                </PrimaryButton>
            </Card>
        </Grid>
    )
}