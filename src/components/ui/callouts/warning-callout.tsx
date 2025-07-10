import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Callout } from "@radix-ui/themes";

export function WarningCallout({ msg }: { msg: string }) {
    return (
        <Callout.Root mb="3" color="orange">
            <Callout.Icon><ExclamationTriangleIcon /></Callout.Icon>
            <Callout.Text>{msg}</Callout.Text>
        </Callout.Root>
    )
}