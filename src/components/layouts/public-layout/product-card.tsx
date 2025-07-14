import { Card, Flex, IconButton, Inset, Link, Separator, Strong, Text } from "@radix-ui/themes";
import PrimaryButton from "../../ui/buttons/primary-button";
import { SecondaryButton } from "../../ui/buttons/secondary-button";
import { HeartIcon, PlusIcon } from "@radix-ui/react-icons";
import { ShoppingBag } from "lucide-react";
import { Product } from "../../../app/types/products";

type ProductCardProps = {
    product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Card
            style={{ boxShadow: "var(--shadow-5)" }}
            size="3"
            mb="3"
            ml="3"
            variant="surface"
        // className="resp-width"
        >
            <Flex
                direction="column"
                width={{ initial: "290px", md: "257px" }}
                height="360px"
                justify="between"
            >
                <Inset clip="padding-box" side="top" pb="current">
                    <img
                        src={`/images/products/${product.slug}.jpeg`}
                    />
                </Inset>
                <Separator size="4" />
                <Text size="3" as="p" mt="2" mb="2">
                    <Link href={`product/${product.slug}`}>
                        {product.name}
                    </Link>
                </Text>
                <Text size="6">
                    <Strong>$ {product.sale_price}</Strong>
                </Text>
                <Flex direction="row" position="static" gap="2" mt="3">
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
            </Flex>
        </Card>
    )
}