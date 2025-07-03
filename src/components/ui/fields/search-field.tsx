import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Flex, IconButton, TextField } from "@radix-ui/themes";

export default function SearchField() {
    return (
        <Flex align="start" justify="start" gap="1" mt="4">
            <TextField.Root style={{ width: "100%" }} placeholder="Search for products...">
                <TextField.Slot side="right">
                    <IconButton type="submit" size="1">
                        <MagnifyingGlassIcon />
                    </IconButton>
                </TextField.Slot>
            </TextField.Root>
        </Flex>
    )
}