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
        const storedTheme = localStorage.getItem("app-theme");
        if (storedTheme === 'dark' || storedTheme === 'light') {
            setTheme(storedTheme);
        }
        console.log('tema nao setado, tema no localStorage:', storedTheme)
    }, [])

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("app-theme", theme);
        console.log(`o tema ${theme} foi pro localStorage`)
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setLight, setDark }}>
            {children}
        </ThemeContext.Provider>
    )
}

