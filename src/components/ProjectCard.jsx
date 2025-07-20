import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Express from '../assets/expressjs-icon.svg?react'


export default function ProjectCard({ project }) {
    const {theme} = useContext(ThemeContext)
    const [showFullDescription, setShowFullDescription] = useState(false);
    function toggleDescription() {
        setShowFullDescription(!showFullDescription)
    }
    return (
        <div className={`border-1 h-fit ${theme === "dark" ? "border-gray-500" : "border-black"} flex flex-col items-start w-50 flex-grow p-5 rounded-2xl`}>
            <project.Logo stroke={`${theme === "dark" ? "white" : "black"}`} height="80px" className="rounded-2xl"></project.Logo>
            <hr className='w-full my-2 border-gray-500' />
            <div className='flex items-center justify-between w-full text-xl font-bold'>
                <p className=''>{project.title}</p>
                <a href={project.link}><i className="ri-links-fill"></i></a>
            </div>
            <hr className='w-full my-2 border-gray-500' />
            <p className='text-justify font-light text-sm sm:text-md'>
                {project.description.length > 100 ? (
                    <>
                        {showFullDescription ? project.description : `${project.description.slice(0, 100)}...`}
                        <button
                            onClick={toggleDescription}
                            className="text-blue-500 hover:underline focus:outline-none cursor-pointer"
                        >
                            {showFullDescription ? 'Read Less' : 'Read More'}
                        </button>
                    </>

                ) : (
                    project.description
                )}
            </p>
            <div className='flex w-full flex-col justify-between items-baseline mt-3 gap-2'>
                <div className='flex flex-wrap gap-2 cursor-default items-center'>
                    {project.soft.length > 0 ? (
                        project.soft.map((skill, index) => (
                            <div key={index} className={`text-[10px] border-1 text-center flex items-center justify-center pb-[0.5px] border-gray-400 px-2  ${theme === "dark" ? "active:bg-transparent hover:bg-gray-700" : "active:bg-gray-300 hover:bg-gray-300"}  rounded-2xl select-none`}>{skill}</div>
                        ))
                    ) : (
                        <div></div>
                    )}
                </div>
                <p className='font-light flex items-center gap-1'><i className="ri-calendar-event-line"></i>{project.time}</p>
            </div>
            <hr className='w-full my-2 border-gray-500' />
            <div className='flex items-center gap-2'>
                {project.skills.map((skill, index) => (
                    <React.Fragment key={index}>
                        {skill.name === "Express" ? (
                            <Express stroke={`${theme === "dark" ? "white" : "black"}`} fill={`${theme === "dark" ? "white" : "black"}`} className="w-6 h-6" />
                        ) : (
                            <img src={skill.image} alt={skill.name} className='h-6' />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}