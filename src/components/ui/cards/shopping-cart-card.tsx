import { Box, Card, Text } from "@radix-ui/themes";
import { ResponsiveCard } from "./responsive-card";
import ShoppingCartBtn from "../buttons/cart-button";

export function ShoppingCartCard() {
    return (
        <ResponsiveCard trigger={<ShoppingCartBtn />}>
            <Card>
                <Box className="h-full w-80 flex items-center justify-center">
                    <Text size="3" weight="medium">Your cart is empty</Text>
                </Box>
            </Card>
        </ResponsiveCard>
    )
}