import React, { useContext } from 'react'
import { ThemeContext } from "../context/ThemeContext"

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

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Skills = () => {
    const { theme } = useContext(ThemeContext)
    function LineWithText({ text }) {
        return (
            <div className='flex items-center relative w-screen my-5'>
                <div className="w-8 sm:w-28 border-t border-gray-600"></div>
                <span className="mx-2 text-gray-400 font-medium">
                    {text}
                </span>
                <div className="flex-grow-[8] border-1 border-gray-600"></div>
            </div>
        )
    }

    function CardWithImage({ text, image, rating }) {
        return (
            <div className={`rounded-xl flex gap-5 items-center flex-grow max-w-100 justify-between flex-wrap pl-5 border-1 ${theme === "dark" ? "border-gray-600" : "border-gray-400 bg-gray-100 hover:bg-gray-200"} overflow-hidden cursor-pointer`}>
                <div className='flex sm:gap-2 flex-col sm:flex-row'>
                    <p className='text-xl font-bold'>{text}</p>
                    <Rating className='max-w-20 pt-1' value={rating} readOnly={true}></Rating>
                </div>
                {
                    text === "Express.js" ? (<Express stroke={`${theme === "dark" ? "white" : "black"}`} fill={`${theme === "dark" ? "white" : "black"}`} className={`object-contain mask-gradient-to-r`}/>):(<img src={image} alt="Nom-Nom" className={`object-contain ${theme === "dark" ? "mask-gradient-to-r": ""}`}/>)
                }
                {/* <img src={image} alt="Nom-Nom" className={`object-contain ${theme === "dark" ? "mask-gradient-to-r": ""}`}/> */}
            </div>
        )
    }
    return (
        <div className={`w-screen flex flex-col items-center pb-10 ${theme === 'dark' ? "bg-gray-900 text-white" : ""} transition-all duration-300 ease-in-out`}>
            <h1 className='text-4xl font-bold mt-5'>Skills</h1>
            <p className='text-sm font-light'>~Ansh Kumar~</p>
            <LineWithText text={"Programming Languages"} />
            <div className='flex flex-wrap w-screen px-10 sm:px-30 gap-3'>
                <CardWithImage text={"JavaScript"} image={js} rating={4}></CardWithImage>
                <CardWithImage text={"Java"} image={java} rating={3.5}></CardWithImage>
                <CardWithImage text={"Python"} image={python} rating={3.5}></CardWithImage>
            </div>
            <LineWithText text={"Markup & Style"} />
            <div className='flex flex-wrap w-screen px-10 sm:px-30 gap-3'>
                <CardWithImage text={"HTML"} image={html} rating={4.5}></CardWithImage>
                <CardWithImage text={"CSS"} image={css} rating={4.5}></CardWithImage>
                <CardWithImage text={"Taiwind CSS"} image={tailwind} rating={4}></CardWithImage>
                <CardWithImage text={"SASS"} image={sass} rating={3.5}></CardWithImage>
            </div>
            <LineWithText text={"Libraries"}></LineWithText>
            <div className='flex flex-wrap w-screen px-10 sm:px-30 gap-3'>
                <CardWithImage text={"React.js"} image={reac} rating={4}></CardWithImage>
                <CardWithImage text={"Node.js"} image={node} rating={3.5}></CardWithImage>
                <CardWithImage text={"Express.js"} rating={2.5}></CardWithImage>
            </div>
            <LineWithText text={"Others"}></LineWithText>
            <div className='flex flex-wrap w-screen px-10 sm:px-30 gap-3'>
                <CardWithImage text={"Git"} image={git} rating={4}></CardWithImage>
                <CardWithImage text={"Docker"} image={docker} rating={2.5}></CardWithImage>
            </div>
        </div>
    )
}

export default Skills