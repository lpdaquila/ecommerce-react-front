import { createContext, FC, useEffect, useState } from "react";

type SidebarContext = {
    sidebarToggle: any;
    toggleSidebar: () => void;
    closeSidebar: () => void;
};


export const SidebarContext = createContext<SidebarContext>(
    {} as SidebarContext
);

export const SidebarProvider: FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [sidebarToggle, setSidebarToggle] = useState(false);
    const toggleSidebar = () => {
        setSidebarToggle(!sidebarToggle);
    };
    const closeSidebar = () => {
        setSidebarToggle(false);
    };

    useEffect(() => {
        console.log(sidebarToggle)
    }, [])

    return (
        <SidebarContext.Provider
            value={{ sidebarToggle, toggleSidebar, closeSidebar }}
        >
            {children}
        </SidebarContext.Provider>
    )
}