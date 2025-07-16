import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const HomePage = () => {
	const {theme} = useContext(ThemeContext)
	return (
        <div className={`sm:pl-30 h-screen flex flex-col pt-10 sm:pt-15 items-center sm:items-start gap-5 ${theme === "dark" ? "bg-gray-900" : ""} transition-all duration-250 ease-in`}>
			<img src="/me.jpg" alt="Profile-Photo" className='sm:h-40 sm:w-40 md:h-50 md:w-50 h-30 w-30 object-cover object-[10%_20%] rounded-full'/>
			<p className={`font-extralight text-4xl ${theme === "dark" ? "text-white": "text-black"}`}>Who's Ansh?</p>
			<p className={`${theme === "dark" ? "text-white": "text-black"} pl-10 pr-10 text-center sm:text-left sm:pl-0 sm:pr-30`}>Ansh is a nice guy who develops websites, builds some logic and sleeps like a baby.</p>
			<div className={`flex text-2xl gap-1 ${theme === "dark" ? "text-white": "text-black"}`}>
				<a href="https://github.com/Ansssh" target='_blank'><i class="ri-github-fill"></i></a>
				<a href="https://www.linkedin.com/in/anshhhhh/" target='_blank'><i class="ri-linkedin-box-fill"></i></a>
				<a href="https://psnprofiles.com/Anshiiii_oyee" target='_blank'><i class="ri-playstation-fill"></i></a>
				<a href="https://stackoverflow.com/users/30916799/ansh-arora" target='_blank'><i class="ri-stack-overflow-fill"></i></a>
				<a href="https://t.me/Ansh_oyee" target='_blank'><i class="ri-telegram-2-fill"></i></a>
				<a href="https://x.com/a_arora937" target='_blank'><i class="ri-twitter-x-fill"></i></a>
				<a href="https://www.youtube.com/@ansharora5396" target='_blank'><i class="ri-youtube-fill"></i></a>
				<a href="https://www.threads.com/@anshiii.oyee" target='_blank'><i class="ri-threads-fill"></i></a>
				<a href="https://discordapp.com/users/640845246133174272" target='_blank'><i class="ri-discord-fill"></i></a>
			</div>
		</div>
  )
}

export default HomePage