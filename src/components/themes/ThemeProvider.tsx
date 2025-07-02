import { Theme } from "@radix-ui/themes";
import { ReactNode, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

type Props = {
    children: ReactNode;
}

export default function ThemeProvider({ children }: Props) {
    const { theme } = useContext(ThemeContext)
    return (
        <Theme
            accentColor="ruby"
            grayColor='auto'
            appearance={theme}
            radius="large"
            scaling="100%"
            panelBackground="translucent"
        >
            {children}
        </Theme>
    )
}