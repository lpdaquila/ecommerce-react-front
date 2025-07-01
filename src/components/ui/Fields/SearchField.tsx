import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, Flex, IconButton, TextField } from "@radix-ui/themes";

export default function SearchField() {
    return (
        <Flex align="center" justify="center" gap="1" className="mt-4 mr-auto">
            <TextField.Root placeholder="Search for products...">
                <TextField.Slot>
                </TextField.Slot>
            </TextField.Root>
            <Box pl="4" className="md:pl-0">
                <IconButton type="submit" highContrast size="2">
                    <MagnifyingGlassIcon />
                </IconButton>
            </Box>
        </Flex>
    )
}