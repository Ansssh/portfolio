import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const HomePage = () => {
	const {theme} = useContext(ThemeContext)
	return (
        <div className={`pl-30 h-[calc(100vh-100px)] flex flex-col justify-center ${theme === "dark" ? "bg-gray-900" : ""}`}>
			<p className={`font-extralight text-4xl ${theme === "dark" ? "text-white": "text-black"}`}>Who's Ansh?</p>
			<p className={`font-bold ${theme === "dark" ? "text-white": "text-black"}`}>Hello~ Lord Ansh here</p>
		</div>
  )
}

export default HomePage