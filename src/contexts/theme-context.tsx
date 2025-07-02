import React, { createContext, FC, useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

type ThemeContextType = {
    theme: ThemeMode;
    toggleTheme: () => void;
    setLight: () => void;
    setDark: () => void;
}

export const ThemeContext = createContext<ThemeContextType>(
    {} as ThemeContextType
);

export const ThemeContextProvider: FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeMode>("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const setLight = () => setTheme("light");
    const setDark = () => setTheme("dark");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("app-theme", theme);
    }, [theme]);

    useEffect(() => {
        const storedTheme = localStorage.getItem("app-theme") as ThemeMode;
        if (storedTheme === "dark" || storedTheme === "light") {
            setTheme(storedTheme);
        }
    })

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setLight, setDark }}>
            {children}
        </ThemeContext.Provider>
    )
}

