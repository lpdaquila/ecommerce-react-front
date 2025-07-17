import { Button, Container, Text } from "@radix-ui/themes";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { SidebarContext } from "../../../contexts/sidebar-context";

export function MobileStoreLogo() {
    const navigate = useNavigate();

    const { toggleSidebar } = useContext(SidebarContext);

    return (
        <Container
            maxWidth="100%"
            mt="6"
            ml="4"
            position={{ md: "relative", lg: "absolute" }}
        >
            <Button variant="ghost" onClick={() => { toggleSidebar(), navigate('/') }}>
                <Text size="8">Your Store</Text>
            </Button>
        </Container>
    )
}