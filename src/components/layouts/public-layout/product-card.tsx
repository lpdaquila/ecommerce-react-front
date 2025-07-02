import { Card, Flex, IconButton, Inset, Separator, Text } from "@radix-ui/themes";
import PrimaryButton from "../../ui/buttons/primary-button";
import { SecondaryButton } from "../../ui/buttons/secondary-button";
import { HeartIcon } from "@radix-ui/react-icons";

export function ProductCard() {
    return (
        <Card
            style={{
                maxHeight: "500px",
                width: "100%",
                boxShadow: "var(--shadow-5)"
            }}
            size="3"
            mb="3"
            variant="surface"
        >
            <Inset clip="padding-box" side="top" pb="current">
                <img
                    src="/images/products/smartphone.jpeg"
                    alt="Smartphone"
                />
            </Inset>
            <Separator size="4" />
            <Text as="p" mt="2" mb="4">
                Prod description
            </Text>
            <Flex direction="row" gap="2">
                <PrimaryButton style={{ width: "45%" }}>
                    Buy
                </PrimaryButton>
                <SecondaryButton>
                    Add to Chart
                </SecondaryButton>
                <IconButton variant="outline">
                    <HeartIcon />
                </IconButton>
            </Flex>
        </Card>
    )
}