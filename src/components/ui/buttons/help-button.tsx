import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { SecondaryButton } from "./secondary-button";

export function HelpButton() {
    return (
        <SecondaryButton>
            <QuestionMarkCircledIcon /> Help
        </SecondaryButton>
    )
}