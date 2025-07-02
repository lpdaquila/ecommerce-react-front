import { Flex, Section, Text } from "@radix-ui/themes";

export default function SectionHeader() {
    return (
        <Section
            className="bg-panel"
            size="3"
            mt="4"
            mb="3"
        >
            <Flex justify="center">
                <Text size="2" weight="medium">
                    Banner / Carousel
                </Text>
            </Flex>
        </Section>
    )
}