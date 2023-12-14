import { ThemeProvider } from "@mui/material";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { darkTheme, lightTheme } from "./themes";

interface Theme {
    darkMode: boolean;
    setDarkMode: Dispatch<SetStateAction<boolean>>;
}

const ThemeContext = createContext<Theme>({
    darkMode: false,
    setDarkMode: () => {},
});

export function ThemeModeProvider({ children }: { children: ReactNode }) {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            <ThemeProvider theme={ darkMode ? darkTheme : lightTheme }>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext);
}
