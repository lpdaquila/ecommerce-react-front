import React from "react";
import { HoverCard } from "@radix-ui/themes";
import { Popover } from "@radix-ui/themes";

function useHasHover() {
    return window.matchMedia('(hover: hover').matches;
}

type RCProps = {
    trigger: React.ReactNode;
    children: React.ReactNode;
    openDelay?: number;
}

export const ResponsiveCard: React.FC<RCProps> = ({
    trigger,
    children,
    openDelay = 200,
}) => {
    const hasHover = useHasHover();

    const Root = hasHover ? HoverCard.Root : Popover.Root
    const Trigger = hasHover ? HoverCard.Trigger : Popover.Trigger
    const Content = hasHover ? HoverCard.Content : Popover.Content

    return (
        <Root openDelay={hasHover ? openDelay : undefined}>
            <Trigger>{trigger}</Trigger>
            <Content sideOffset={4}>{children}</Content>
        </Root>
    );
};