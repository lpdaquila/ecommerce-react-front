import { CrossCircledIcon } from "@radix-ui/react-icons";
import { Callout } from "@radix-ui/themes";
import { useAuth } from "../../../app/hooks/useAuth";
import { useEffect } from "react";

export function ErrorCallout({ msg }: { msg: string }) {
    const { tryRefreshToken, handleSignOut } = useAuth();

    const handleTokenRefresh = async (detail: string) => {
        if (detail.includes("Given token not valid")) {
            const refreshed = await tryRefreshToken();
            if (!refreshed) {
                handleSignOut();
                return false;
            }
            return true;
        }
        return false;
    };

    useEffect(() => {
        handleTokenRefresh(msg);
    }, [])

    return (
        <Callout.Root mb="3" color="red">
            <Callout.Icon><CrossCircledIcon /></Callout.Icon>
            <Callout.Text>{msg}</Callout.Text>
        </Callout.Root>
    )
}