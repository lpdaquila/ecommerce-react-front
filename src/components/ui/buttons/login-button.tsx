import { useNavigate } from "react-router";
import { SecondaryButton } from "./secondary-button";
import { PersonIcon } from "@radix-ui/react-icons";

export function LoginButton() {
    const navigate = useNavigate();
    return (
        <SecondaryButton
            mb="2"
            onClick={() => navigate('/signin')}>
            <PersonIcon />Sign In
        </SecondaryButton>
    )
}