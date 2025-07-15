import { useState, useEffect } from "react"
import Header from "./components/Header"

export default function App() {
    const [theme, setTheme] = useState("light")
    return (
        <div className={`h-screen w-screen overflow-hidden ${theme === 'dark' ? "bg-gray-600" : ""}`}>
            <Header theme={theme} setTheme={setTheme} />

            <footer className={`fixed bottom-0 left-1/2 -translate-x-1/2 italic font-bold text-[10px] sm:text-[11px] md:text-[12px] ${theme === 'dark' ? "text-gray-200": "text-gray-500"}`}>Jack of All Trades, Master of None</footer>

        </div>

    )
}