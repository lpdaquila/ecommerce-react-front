import { Flex, Text } from "@radix-ui/themes";

export default function FilterSidebar() {
    return (
        <Flex direction="column" gap="5" className="pr-2">
            <Text weight="bold" size="4">
                Filters
            </Text>
        </Flex>
    )
}