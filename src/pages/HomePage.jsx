import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import HireMe from '../components/HireMe'

const HomePage = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`w-screen sm:px-30 px-10 py-10 sm:pt-10 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"} transition-all duration-300 ease-in`}>
            <div className='flex flex-col lg:flex-row justify-between gap-10 items-center'>
                <div className='flex flex-col items-center lg:items-start lg:w-150'>
                    <img src="/me.jpg" alt="Portrait of Ansh Kumar" className='sm:h-40 sm:w-40 md:h-50 md:w-50 h-30 w-30 object-cover object-[10%_20%] rounded-full' />
                    <div className='flex flex-col gap-1 lg:items-start items-center mt-4'>
                        <p className={`font-extralight text-4xl ${theme === "dark" ? "text-white" : "text-black "}`}>Who's Ansh?</p>
                        <span className={`${theme === "dark" ? "text-white" : "text-black"} text-sm text-center sm:text-left sm:text-lg italic`}>B.Tech - Information Technology (Hons.)</span>
                    </div>
                    <p className={`${theme === "dark" ? "text-white" : "text-black"} text-center lg:text-left mt-4`}>
                        Ansh is a nice guy who develops websites, focused on building robust and user friendly web applications. With a keen eye for detail and commitment to effective communication. From front-end interfaces to back-end architecture, Ansh delivers efficient & scalable solutions and sleeps like a baby.
                    </p>
                    <div className={`flex text-2xl gap-2 mt-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        <a href="https://github.com/Ansssh" target='_blank' rel="noopener noreferrer" aria-label="GitHub Profile"><i className="ri-github-fill"></i></a>
                        <a href="https://www.linkedin.com/in/anshhhhh/" target='_blank' rel="noopener noreferrer" aria-label="LinkedIn Profile"><i className="ri-linkedin-box-fill"></i></a>
                        <a href="https://stackoverflow.com/users/30916799/ansh-arora" target='_blank' rel="noopener noreferrer" aria-label="Stack Overflow Profile"><i className="ri-stack-overflow-fill"></i></a>
                        <a href="https://x.com/a_arora937" target='_blank' rel="noopener noreferrer" aria-label="Twitter X Profile"><i className="ri-twitter-x-fill"></i></a>
                        <a href="https://www.threads.com/@anshiii.oyee" target='_blank' rel="noopener noreferrer" aria-label="Threads Profile"><i className="ri-threads-fill"></i></a>
                    </div>
                </div>
                <div className='md:w-100 sm:w-100 w-full'>
                    <HireMe theme={theme} />
                </div>

            </div>

        </div>
    );
};

export default HomePage;