import { Box, Text, Grid, HoverCard, Card } from "@radix-ui/themes";
import PrimaryButton from "./ui/buttons/primary-button";
import { ShoppingCart } from "lucide-react";
import ShoppingCartBtn from "./ui/buttons/cart-button";

type Props = {
    isMedia?: boolean;
}

export function SideGrid({ isMedia = false }: Props) {
    return (
        <Grid
            mt="3"
            mr="1"
            columns="1"
            display={{ initial: `${isMedia ? "grid" : "none"}`, sm: 'grid' }}
        >

            <HoverCard.Root openDelay={100} closeDelay={150}>
                <HoverCard.Trigger>
                    <ShoppingCartBtn />
                </HoverCard.Trigger>

                <HoverCard.Content
                    sideOffset={8}
                    className="w-80 h-56 rounded-xl shadow-xl transition-all bg-background/95 backdrop-blur-sm"
                >
                    <Card>
                        <Box className="h-full flex items-center justify-center">
                            <Text size="3" weight="medium">Your cart is empty</Text>
                        </Box>
                    </Card>
                </HoverCard.Content>
            </HoverCard.Root>
        </Grid>
    )
}