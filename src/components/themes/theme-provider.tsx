import { Theme } from "@radix-ui/themes";
import { ReactNode, useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";

type Props = {
    children: ReactNode;
}

export default function ThemeProvider({ children }: Props) {
    const { theme } = useContext(ThemeContext)
    return (
        <Theme
            accentColor="ruby"
            grayColor="mauve"
            appearance={theme}
            radius="full"
            scaling="100%"
            panelBackground="translucent"
        >
            {children}
        </Theme>
    )
}