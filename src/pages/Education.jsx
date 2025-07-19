import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'


// Since i just graduated in Bachelors of Technology, and do not plan to pusue masters, lets just keep it dormant for time being
const Education = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`flex flex-col py-5 items-center w-screen ${theme === "dark" ? "bg-gray-900 text-white" : ""} transition-all duration-300 ease-in-out px-10 sm:px-30`}>
            <h1 className='text-4xl font-bold'>Education</h1>
            <p className='text-sm font-light'>~Ansh Kumar~</p>
            <div className='flex flex-col border border-gray-400 px-4 py-2 rounded-2xl mt-4 max-w-120'>
                <div className='flex justify-between items-center flex-wrap'>
                    <h1 className='text-lg sm:text-2xl sm:mr-10 font-bold'>Bachelor of Technology</h1>
                    <p className='italic text-md sm:text-2xl font-light'>2021 - 2025</p>
                </div>
                <p className='text-sm italic'>Information Technology (Hons.)</p>
                <hr className='border-gray-500 my-2'/>
                <div className='flex flex-wrap justify-between'>
                    <p className='font-bold sm:mr-10 mr-2'>Guru Nanak Dev Engineering College</p>
                    <p>Ludhiana, PB</p>
                </div>                
            </div>
        </div>
    )
}

export default Education