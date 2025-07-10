import { AlertDialog, Flex, Text } from "@radix-ui/themes";
import { SecondaryButton } from "../buttons/secondary-button";
import PrimaryButton from "../buttons/primary-button";
import { ReactNode } from "react";

interface DialogProps {
    trigger: ReactNode;
    title: string;
    description: string;
    cancelText?: string;
    actionText?: string;
    onConfirm: () => void;
}

export function Dialog({
    trigger,
    title,
    description,
    cancelText = "Cancel",
    actionText = "Confirm",
    onConfirm
}: DialogProps) {
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger>{trigger}</AlertDialog.Trigger>
            <AlertDialog.Content maxWidth="400px">
                <AlertDialog.Title>{title}</AlertDialog.Title>
                <AlertDialog.Description>
                    <Text>{description}</Text>
                </AlertDialog.Description>

                <Flex gap="3" mt="4" justify="end">
                    <AlertDialog.Cancel>
                        <SecondaryButton>
                            {cancelText}
                        </SecondaryButton>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action>
                        <PrimaryButton color="red" onClick={onConfirm}>
                            {actionText}
                        </PrimaryButton>
                    </AlertDialog.Action>
                </Flex>
            </AlertDialog.Content>
        </AlertDialog.Root>
    )
}