import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import { ThemeContext } from "../../../contexts/theme-context";
import { useContext } from "react";

export function ChangeThemeBtn() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <IconButton
            ml="2"
            variant="soft"
            size="2"
            onClick={toggleTheme}
        >
            {theme === "light" ? <SunIcon /> : <MoonIcon />}
        </IconButton>
    )
}