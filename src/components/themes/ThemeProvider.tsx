import { Theme } from "@radix-ui/themes";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

export default function ThemeProvider({ children }: Props) {
    return (
        <Theme
            accentColor="crimson"
            grayColor='auto'
            appearance='light'
            radius="small"
            scaling="100%"
            panelBackground="translucent"
        >
            {children}
        </Theme>
    )
}