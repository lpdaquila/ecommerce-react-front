import { CrossCircledIcon } from "@radix-ui/react-icons";
import { Callout } from "@radix-ui/themes";

export function ErrorCallout({ msg }: { msg: string }) {
    return (
        <Callout.Root mb="3" color="red">
            <Callout.Icon><CrossCircledIcon /></Callout.Icon>
            <Callout.Text>{msg}</Callout.Text>
        </Callout.Root>
    )
}