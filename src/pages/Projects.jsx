import React, { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import ProjectCard from '../components/ProjectCard'

import java from '../assets/java-icon.svg'
import python from '../assets/python-icon.svg'
import docker from '../assets/docker-icon.svg'
import Express from '../assets/expressjs-icon.svg?react'
import git from '../assets/git-scm-icon.svg'
import js from '../assets/javascript-icon.svg'
import node from '../assets/nodejs-icon.svg'
import reac from '../assets/reactjs-icon.svg'
import sass from "../assets/sass-lang-icon.svg"
import tailwind from '../assets/tailwindcss-icon.svg'
import html from '../assets/w3_html5-icon.svg'
import css from "../assets/w3_css-icon~old.svg"


import Sudoku from '../assets/sudoku_alt.svg?react';
import Uber from '../assets/WSc5-ZpWcvs-uber_tinyps_v4.svg?react'
import Chat from '../assets/chatApp.svg?react'

const Projects = () => {
    const { theme } = useContext(ThemeContext)
    const projects = [
        {
            title: "Sudoku Solver",
            link: "https://github.com/Ansssh/sudoku-solver",
            Logo: Sudoku,
            time: "Jun 2025",
            description: "Engineered a React-based Sudoku Solver effectively solving hard puzzles. Utilized hidden and naked singles logic. Features block/row/column highlighting for enhanced usability, showcasing robust web development. ",
            skills: [
                {
                    name: "React",
                    image: reac
                },
                {
                    name: "Tailwind",
                    image: tailwind,
                },
                {
                    name: "git",
                    image: git
                }
            ],
            soft: [
                "Logic Building", "UI/UX", "Serverless"
            ]
        },
        {
            title: "Uber Clone",
            link: "https://github.com/Ansssh/Uber",
            Logo: Uber,
            time: "Apr-May 2025",
            description: "Architected and deployed a full-stack Uber clone, utilizing MERN stack components (MongoDB, Express.js, React.js) to support 20+ users. Integrated Socket.IO for real-time, zero-latency communication, enhancing dynamic ride booking and updates.",
            skills: [
                {
                    name: "React",
                    image: reac
                },
                {
                    name: "Express",
                    
                },
                {
                    name: "Node.js",
                    image: node
                },
                {
                    name: "Tailwind",
                    image: tailwind,
                },                
                {
                    name: "Git",
                    image: git
                },

            ],
            soft: [
                "MERN Stack"
            ]
        }, {
            title: "OnlyChats",
            link: "https://github.com/Ansssh/ChatApp",
            Logo: Chat,
            time: "Nov 2024",
            description: "Developed a full-stack web app serving 20+ users using MongoDB for data storage, REST API for server-side operations and React.js as Frontend. Implemented real-time communication using Socket.IO, ensuring zero-latency messaging. ",
            skills: [
                {
                    name: "React",
                    image: reac
                },
                {
                    name: "Express",
                    
                },
                {
                    name: "Node.js",
                    image: node
                },
                {
                    name: "Tailwind",
                    image: tailwind,
                },                
                {
                    name: "Git",
                    image: git
                },

            ],
            soft: [
                "MERN Stack"
            ]
        }
    ]

    return (
        <div className={`flex flex-col gap-2 items-center overflow-auto w-screen ${theme === "dark" ? "bg-gray-900 text-white" : ""} transition-all duration-300 ease-in-out pb-6 px-10 sm:px-30`}>
            <h1 className='text-4xl font-bold mt-5'>Projects</h1>
            <p className='text-sm font-light'>~Ansh Kumar~</p>
            <div className='flex flex-row gap-2 flex-wrap mt-2 w-full'>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project}></ProjectCard>
                ))}
            </div>
        </div>
    )
}

export default Projects