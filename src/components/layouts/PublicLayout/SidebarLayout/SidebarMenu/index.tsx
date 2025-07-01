import * as Collapsible from "@radix-ui/react-collapsible";
import { useContext } from "react";
import FilterSidebar from "../FilterSidebar";
import { SidebarContext } from "../../../contexts/SidebarContext";

export default function CollapsibleSideBar() {
    const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);

    return (
        <Collapsible.Root
            open={sidebarToggle}
            onOpenChange={toggleSidebar}
            className="shrink-0"
        >
            <Collapsible.Content
                forceMount
                className={`
                    w-64 md:relative md:translate-x-0 md:block
                    fixed top-0 bottom-0 left-0 z-20 bg-background/95 backdrop-blur
                    transition-transform data-[state=closed]:-translate-x-full
                    md:data-[state=closed]:translate-x-0
                    `}
            >
                <aside className="h-full overflow-y-auto border-r p-4 pt-16 md:pt-4">
                    <FilterSidebar />
                </aside>

            </Collapsible.Content>
        </Collapsible.Root>
    )
}