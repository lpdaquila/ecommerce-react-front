import { Box, Flex } from "@radix-ui/themes";
import { StoreLogo } from "../../../ui/logos/store-logo";
import { HelpButton } from "../../../ui/buttons/help-button";
import { ChangeThemeBtn } from "../../../ui/buttons/change-theme-button";
import { MobileMenuButton } from "../../../ui/buttons/mobile-menu-button";

export function Header() {
    return (
        <header
            className="header"
        >
            <Flex direction="row"
                justify="between"
                align="center">
                <Box style={{ marginBottom: "100px" }}>
                    <StoreLogo />
                    <MobileMenuButton />
                </Box>
                <Flex direction="row" align="end" justify="end" mr="3">
                    <HelpButton />
                    <ChangeThemeBtn />
                </Flex>
            </Flex>
        </header>
    )
}