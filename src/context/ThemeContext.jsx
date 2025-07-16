import { createContext, useState, useEffect, Children } from "react";

export const ThemeContext = createContext({
    theme: "light",
    toggleTheme: ()=>{}
})

export const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState("dark")
    const toggleTheme = () => {
        setTheme((prev) => {
            return prev === "light" ? "dark" : "light"
        })
    }
    const contextValue = {
        theme,
        toggleTheme
    }
    
    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}