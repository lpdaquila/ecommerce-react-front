import { DropdownMenu } from "@radix-ui/themes";

type Props = {
    content: string;
}

export default function DropdownItems({ content }: Props) {
    return (
        <DropdownMenu.Item>{content}</DropdownMenu.Item>
    )
}