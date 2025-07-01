import { Box, Section, Text } from "@radix-ui/themes";

export default function SectionHeader() {
    return (
        <Section size="1">
            <Box
                className="bg-red-800 h-40 md:h-56 w-full mt-1 rounded-lg flex items-center justify-center"
            >
                <Text size="2" weight="medium" align="center">
                    Banner / Carousel
                </Text>
            </Box>
        </Section>
    )
}