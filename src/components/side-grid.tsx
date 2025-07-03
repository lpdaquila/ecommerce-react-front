import { Card, Grid } from "@radix-ui/themes";
import PrimaryButton from "./ui/buttons/primary-button";
import { ShoppingCart } from "lucide-react";

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
            <Card variant="ghost" size="2">
                <PrimaryButton
                    mr="7"
                    mb="3"
                    variant="ghost"
                    style={{ width: `${isMedia ? "57%" : "100%"}` }}
                >
                    <ShoppingCart size={40} />
                </PrimaryButton>
            </Card>
        </Grid>
    )
}