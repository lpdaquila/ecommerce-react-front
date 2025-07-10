import { CheckCircledIcon } from "@radix-ui/react-icons";
import { Callout } from "@radix-ui/themes";

export function SuccessCallout({ msg }: { msg: string }) {
    return (
        <Callout.Root mb="3" color="green">
            <Callout.Icon><CheckCircledIcon /></Callout.Icon>
            <Callout.Text>{msg}</Callout.Text>
        </Callout.Root>
    )
}