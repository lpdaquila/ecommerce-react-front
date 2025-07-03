import { Card, Flex, IconButton, Inset, Link, Separator, Strong, Text } from "@radix-ui/themes";
import PrimaryButton from "../../ui/buttons/primary-button";
import { SecondaryButton } from "../../ui/buttons/secondary-button";
import { HeartIcon, PlusIcon } from "@radix-ui/react-icons";
import { ShoppingBag } from "lucide-react";

export function ProductCard() {
    return (
        <Card
            style={{
                maxHeight: "500px",
                boxShadow: "var(--shadow-5)",
            }}
            size="3"
            mb="3"
            variant="surface"
            className="resp-width"
        >
            <Inset clip="padding-box" side="top" pb="current">
                <img
                    src="/images/products/smartphone.jpeg"
                    alt="Smartphone"
                />
            </Inset>
            <Separator size="4" />
            <Text size="3" as="p" mt="2" mb="2">
                <Link href="#">Prod description</Link>
            </Text>
            <Text size="6">
                <Strong>$700.00</Strong>
            </Text>
            <Flex direction="row" gap="2" mt="3">
                <PrimaryButton style={{ width: "40%" }}>
                    <ShoppingBag size={17} />Buy
                </PrimaryButton>
                <SecondaryButton>
                    <PlusIcon />Add to Cart
                </SecondaryButton>
                <IconButton variant="outline">
                    <HeartIcon />
                </IconButton>
            </Flex>
        </Card>
    )
}