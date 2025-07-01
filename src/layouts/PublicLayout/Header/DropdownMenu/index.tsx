import { Button, ChevronDownIcon, DropdownMenu } from "@radix-ui/themes";

export default function NavDropdown({ label }: { label: string }) {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <Button
                    variant="solid"
                    size="2"
                    className="inline-flex items-center gap-1 mx-1"
                >
                    {label}
                    <ChevronDownIcon aria-hidden />
                </Button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content
                sideOffset={4}
                className="min-w-[160px] rounded-md border bg-background shadow-lg p-2"
            >
                <DropdownMenu.Item onSelect={() => { }}>Opção 1</DropdownMenu.Item>
                <DropdownMenu.Item onSelect={() => { }}>Opção 2</DropdownMenu.Item>
                <DropdownMenu.Item onSelect={() => { }}>Opção 3</DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    )
}