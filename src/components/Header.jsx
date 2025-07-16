import React, { useRef, useState, useEffect, useContext } from 'react';
import Hamburger from "./Hamburger";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link, NavLink } from 'react-router-dom'; // Import Link and NavLink
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {

    const { theme, toggleTheme } = useContext(ThemeContext)
    const sideMenuRef = useRef(null);
    const hamburgerRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuTimeline = useRef(null);

    useGSAP(() => {
        if (sideMenuRef.current) {
            menuTimeline.current = gsap.timeline({ paused: true, reversed: true })
                .to(sideMenuRef.current, {
                    left: 0,
                    duration: 0.5,
                    ease: "power3.inOut"
                });
        }
    }, { scope: sideMenuRef });

    useEffect(() => {
        if (menuTimeline.current) {
            if (isMenuOpen) {
                menuTimeline.current.play();
            } else {
                menuTimeline.current.reverse();
            }
        }
    }, [isMenuOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isMenuOpen &&
                sideMenuRef.current &&
                !sideMenuRef.current.contains(event.target) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    const handleMenuToggle = (newAnimationState) => {
        setIsMenuOpen(newAnimationState);
    };

    const handleMenuItemClick = () => {
        setIsMenuOpen(false); // Close the side menu on navigation
    };

    return (
        <>
            <header className={`md:flex hidden h-15 items-center justify-between gap-3 px-30 ${theme === "dark" ? "bg-gray-700 text-white" : "bg-gradient-to-r from-white to-gray-400"} transition duration-500 ease-in-out shadow-lg`}>
                <Link to="/" className="flex items-center gap-1 cursor-pointer">
                    <i className="ri-code-s-slash-line pt-[2px] font-bold"></i>
                    <span className="font-bold">Ansh Kumar</span>
                </Link>
                <div className="flex items-center gap-7 justify-evenly">
                    {/* Use NavLink for active styling */}
                    <NavLink to="/skills" className={({ isActive }) => `flex gap-1 items-center text-lg rounded-2xl p-4 ${theme === 'dark' ? "hover:text-black hover:bg-gray-300" : "hover:bg-gray-100"} pt-2 pb-2 cursor-pointer ${isActive ? (theme === 'dark' ? 'text-black bg-gray-300' : 'bg-gray-200') : ''}`}>
                        <i className="ri-quill-pen-ai-line text-lg lg:text-sm pt-[2px]"></i>
                        <span className="hidden lg:block text-sm font-semibold">Skills</span>
                    </NavLink>
                    <NavLink to="/projects" className={({ isActive }) => `flex gap-1 items-center text-lg rounded-2xl p-4 ${theme === 'dark' ? "hover:text-black hover:bg-gray-300" : "hover:bg-gray-100"} pt-2 pb-2 cursor-pointer ${isActive ? (theme === 'dark' ? 'text-black bg-gray-300' : 'bg-gray-200') : ''}`}>
                        <i className="ri-box-3-line text-lg lg:text-sm pt-[2px]"></i>
                        <span className="hidden lg:block text-sm font-semibold">Projects</span>
                    </NavLink>
                    <NavLink to="/experience" className={({ isActive }) => `flex gap-1 items-center text-lg rounded-2xl p-4 ${theme === 'dark' ? "hover:text-black hover:bg-gray-300" : "hover:bg-gray-100"} pt-2 pb-2 cursor-pointer ${isActive ? (theme === 'dark' ? 'text-black bg-gray-300' : 'bg-gray-200') : ''}`}>
                        <i className="ri-focus-2-line text-lg lg:text-sm pt-[2px]"></i>
                        <span className="hidden lg:block text-sm font-semibold">Experience</span>
                    </NavLink>
                    <NavLink to="/education" className={({ isActive }) => `flex gap-1 items-center text-lg rounded-2xl p-4 ${theme === 'dark' ? "hover:text-black hover:bg-gray-300" : "hover:bg-gray-100"} pt-2 pb-2 cursor-pointer ${isActive ? (theme === 'dark' ? 'text-black bg-gray-300' : 'bg-gray-200') : ''}`}>
                        <i className="ri-graduation-cap-line text-lg lg:text-sm pt-[2px]"></i>
                        <span className="hidden lg:block text-sm font-semibold">Education</span>
                    </NavLink>
                    <NavLink to="/resume" className={({ isActive }) => `flex gap-1 items-center text-lg rounded-2xl p-4 ${theme === 'dark' ? "hover:text-black hover:bg-gray-300" : "hover:bg-gray-100"} pt-2 pb-2 cursor-pointer ${isActive ? (theme === 'dark' ? 'text-black bg-gray-300' : 'bg-gray-200') : ''}`}>
                        <i className="ri-survey-line text-lg lg:text-sm pt-[2px]"></i>
                        <span className="hidden lg:block text-sm font-semibold">Resume</span>
                    </NavLink>
                </div>
                <div>
                    {theme === 'light' ? <i className="ri-moon-fill cursor-pointer" onClick={toggleTheme}></i> : <i className="ri-sun-fill cursor-pointer" onClick={toggleTheme}></i>}
                </div>
            </header>

            <header className={`md:hidden flex h-15 items-center justify-between gap-3 px-10 sm:px-30 ${theme === "dark" ? "bg-gray-700 text-white" : "bg-gradient-to-r from-white to-gray-400"} transition duration-250 ease-in-out shadow-lg`}>
                <Link to="/" className="flex items-center gap-1 cursor-pointer">
                    <i className="ri-code-s-slash-line pt-[2px] font-bold"></i>
                </Link>
                <span className="font-bold">Ansh Kumar</span>
                <div ref={hamburgerRef}>
                    <Hamburger
                        theme={theme}
                        animationActive={isMenuOpen}
                        setAnimationActive={handleMenuToggle}
                    />
                </div>
            </header>
            <div
                ref={sideMenuRef}
                className={`fixed top-15 z-50 h-screen w-50 ${theme === "dark" ? "bg-gray-700 text-white" : "bg-gradient-to-r from-white to-gray-200"} transition duration-250 ease-in-out`}
                style={{ left: '-100%' }}
            >
                <div className='p-4'>
                    <ul className="space-y-2">
                        <li><NavLink to="/skills" className={({ isActive }) => `block py-2 px-3 rounded-md hover:bg-gray-100 ${theme === 'dark' ? "hover:text-black active:bg-gray-600 active:text-gray-200" : "active:bg-gray-200"} transition-colors duration-100 ${isActive ? (theme === 'dark' ? 'text-black bg-gray-300' : 'bg-gray-200') : ''}`} onClick={handleMenuItemClick}><i className="ri-quill-pen-ai-line text-lg lg:text-sm pt-[2px] ml-3 mr-2"></i>Skills</NavLink></li>
                        <li><NavLink to="/projects" className={({ isActive }) => `block py-2 px-3 rounded-md hover:bg-gray-100 ${theme === 'dark' ? "hover:text-black active:bg-gray-600 active:text-gray-200" : "active:bg-gray-200"} transition-colors duration-100 ${isActive ? (theme === 'dark' ? 'text-black bg-gray-300' : 'bg-gray-200') : ''}`} onClick={handleMenuItemClick}><i className="ri-box-3-line text-lg lg:text-sm pt-[2px] ml-3 mr-2"></i>Projects</NavLink></li>
                        <li><NavLink to="/experience" className={({ isActive }) => `block py-2 px-3 rounded-md hover:bg-gray-100 ${theme === 'dark' ? "hover:text-black active:bg-gray-600 active:text-gray-200" : "active:bg-gray-200"} transition-colors duration-100 ${isActive ? (theme === 'dark' ? 'text-black bg-gray-300' : 'text-black bg-gray-200') : ''}`} onClick={handleMenuItemClick}><i className="ri-focus-2-line text-lg lg:text-sm pt-[2px] ml-3 mr-2"></i>Experience</NavLink></li>
                        <li><NavLink to="/education" className={({ isActive }) => `block py-2 px-3 rounded-md hover:bg-gray-100 ${theme === 'dark' ? "hover:text-black active:bg-gray-600 active:text-gray-200" : "active:bg-gray-200"} transition-colors duration-100 ${isActive ? (theme === 'dark' ? 'text-black bg-gray-300' : 'text-black bg-gray-200') : ''}`} onClick={handleMenuItemClick}><i className="ri-graduation-cap-line text-lg lg:text-sm pt-[2px] ml-3 mr-2"></i>Education</NavLink></li>
                        <li><NavLink to="/resume" className={({ isActive }) => `block py-2 px-3 rounded-md hover:bg-gray-100 ${theme === 'dark' ? "hover:text-black active:bg-gray-600 active:text-gray-200" : "active:bg-gray-200"} transition-colors duration-100 ${isActive ? (theme === 'dark' ? 'text-black bg-gray-300' : 'text-black bg-gray-200') : ''}`} onClick={handleMenuItemClick}><i className="ri-survey-line text-lg lg:text-sm pt-[2px] ml-3 mr-2"></i>Resume</NavLink></li>
                        <li>
                            <div className={`flex items-center mt-4 py-2 pl-6 rounded-md ${theme === 'dark' ? "active:text-gray-200 active:bg-gray-600" : "active:text-gray-600 active:bg-gray-200"}`}>
                                {theme === 'light' ?
                                    <div className={`flex items-center justify-center cursor-pointer rounded-2xl transition-colors duration-100`} onClick={toggleTheme}>
                                        <i className="ri-moon-fill text-xl"></i>
                                        <span className="ml-2">Dark Theme</span>
                                    </div> :
                                    <div className={`flex items-center justify-center cursor-pointer rounded-2xl  transition-colors duration-100`} onClick={toggleTheme}>
                                        <i className="ri-sun-fill text-xl pt-[2px]"></i>
                                        <span className="ml-2">Light Theme</span>
                                    </div>
                                }
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;