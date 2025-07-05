import { Box, Card, Text } from "@radix-ui/themes";

export function CartItemsCard() {
    return (
        <Card>
            <Box className="h-full flex items-center justify-center">
                <Text size="3" weight="medium">Your cart is empty</Text>
            </Box>
        </Card>
    )
}