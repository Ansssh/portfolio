import React, { useRef, useState, useEffect } from 'react';
import Hamburger from "./Hamburger";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Header = ({ theme, setTheme }) => {
    const sideMenuRef = useRef(null);
    const hamburgerRef = useRef(null); // Ref for the hamburger icon
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuTimeline = useRef(null);

    // Initialize the GSAP timeline once when the component mounts
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

    // Effect to play/reverse the timeline when isMenuOpen changes
    useEffect(() => {
        if (menuTimeline.current) {
            if (isMenuOpen) {
                menuTimeline.current.play();
            } else {
                menuTimeline.current.reverse();
            }
        }
    }, [isMenuOpen]);

    // Function to handle clicks outside the menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            // If the menu is open AND the click is NOT inside the side menu
            // AND the click is NOT on the hamburger button itself, then close the menu.
            if (
                isMenuOpen &&
                sideMenuRef.current &&
                !sideMenuRef.current.contains(event.target) &&
                hamburgerRef.current && // Ensure hamburgerRef exists
                !hamburgerRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false); // Close the menu
            }
        };

        // Add event listener when the menu is open
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            // Consider 'touchstart' for better mobile responsiveness if needed
            // document.addEventListener('touchstart', handleClickOutside);
        }

        // Clean up the event listener when the component unmounts or menu closes
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            // document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isMenuOpen]); // Dependency array: re-run this effect when isMenuOpen changes

    // Function to toggle the menu state, passed to Hamburger
    // This is also what we'll call when a menu item is clicked
    const handleMenuToggle = (newAnimationState) => {
        setIsMenuOpen(newAnimationState);
    };

    // Handler for clicking on a menu item to close the sidebar
    const handleMenuItemClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Desktop Header */}
            <header className={`md:flex hidden h-15 items-center justify-between gap-3 px-30 ${theme === "dark" ? "bg-gray-700 text-white shadow-gray-600" : "bg-gradient-to-r from-white to-gray-400 shadow-gray-200"} transition duration-500 ease-in-out  shadow-lg`}>
                <div className="flex items-center gap-1">
                    <i className="ri-code-s-slash-line pt-[2px] font-bold"></i>
                    <span className="font-bold">Ansh Kumar</span>
                </div>
                <div className="flex items-center gap-7 justify-evenly">
                    {/* Navigation Links */}
                    <div className={`flex gap-1 items-center text-lg rounded-2xl p-4 ${theme === 'dark' ? "hover:text-black hover:bg-gray-300" : "hover:bg-gray-100"} pt-2 pb-2 cursor-pointer`}>
                        <i className="ri-quill-pen-ai-line text-lg lg:text-sm pt-[2px]"></i>
                        <span className="hidden lg:block text-sm font-semibold">Skills</span>
                    </div>
                    <div className={`flex gap-1 items-center text-lg rounded-2xl p-4 ${theme === 'dark' ? "hover:text-black hover:bg-gray-300" : "hover:bg-gray-100"} pt-2 pb-2 cursor-pointer`}>
                        <i className="ri-box-3-line text-lg lg:text-sm pt-[2px]"></i>
                        <span className="hidden lg:block text-sm font-semibold">Projects</span>
                    </div>
                    <div className={`flex gap-1 items-center text-lg rounded-2xl p-4 ${theme === 'dark' ? "hover:text-black hover:bg-gray-300" : "hover:bg-gray-100"} pt-2 pb-2 cursor-pointer`}>
                        <i className="ri-focus-2-line text-lg lg:text-sm pt-[2px]"></i>
                        <span className="hidden lg:block text-sm font-semibold">Experience</span>
                    </div>
                    <div className={`flex gap-1 items-center text-lg rounded-2xl p-4 ${theme === 'dark' ? "hover:text-black hover:bg-gray-300" : "hover:bg-gray-100"} pt-2 pb-2 cursor-pointer`}>
                        <i className="ri-graduation-cap-line text-lg lg:text-sm pt-[2px]"></i>
                        <span className="hidden lg:block text-sm font-semibold">Education</span>
                    </div>
                    <div className={`flex gap-1 items-center text-lg rounded-2xl p-4 ${theme === 'dark' ? "hover:text-black hover:bg-gray-300" : "hover:bg-gray-100"} pt-2 pb-2 cursor-pointer`}>
                        <i className="ri-survey-line text-lg lg:text-sm pt-[2px]"></i>
                        <span className="hidden lg:block text-sm font-semibold">Resume</span>
                    </div>
                </div>
                {/* Theme Toggle */}
                <div>
                    {theme === 'light' ? <i className="ri-moon-fill cursor-pointer" onClick={() => { setTheme("dark") }}></i> : <i className="ri-sun-fill cursor-pointer" onClick={() => { setTheme("light") }}></i>}
                </div>
            </header>

            {/* Mobile Header */}
            <header className={`md:hidden flex h-15 items-center justify-between gap-3 px-10 sm:px-30 ${theme === "dark" ? "bg-gray-700 text-white shadow-gray-600" : "bg-gradient-to-r from-white to-gray-400 shadow-gray-200"} transition duration-500 ease-in-out  shadow-lg`}>
                <i className="ri-code-s-slash-line pt-[2px] font-bold"></i>
                <span className="font-bold">Ansh Kumar</span>
                {/* Pass the toggle handler and current state to Hamburger */}
                {/* Ensure the ref is on the element that will be clicked to open/close the menu */}
                <div ref={hamburgerRef}>
                    <Hamburger
                        theme={theme}
                        animationActive={isMenuOpen}
                        setAnimationActive={handleMenuToggle}
                    />
                </div>
            </header>

            {/* Side Menu */}
            <div
                ref={sideMenuRef}
                className={`fixed top-15 z-50 h-screen w-50 ${theme === "dark" ? "bg-gray-700 text-white" : "bg-gradient-to-r from-white to-gray-100"} transition duration-500 ease-in-out`}
                style={{ left: '-100%' }}
            >
                <div className='p-4'>
                    <ul className="space-y-2">
                        {/* Added active: styles for touch feel */}
                        <li><a href="#" className={`block py-2 px-3 rounded-md hover:bg-gray-100 ${theme === 'dark' ? "hover:text-black active:bg-gray-600 active:text-gray-200" : "active:bg-gray-200"} transition-colors duration-100`} onClick={handleMenuItemClick}><i className="ri-quill-pen-ai-line text-lg lg:text-sm pt-[2px] ml-3 mr-2"></i>Skills</a></li>
                        <li><a href="#" className={`block py-2 px-3 rounded-md hover:bg-gray-100 ${theme === 'dark' ? "hover:text-black active:bg-gray-600 active:text-gray-200" : "active:bg-gray-200"} transition-colors duration-100`} onClick={handleMenuItemClick}><i className="ri-box-3-line text-lg lg:text-sm pt-[2px] ml-3 mr-2"></i>Projects</a></li>
                        <li><a href="#" className={`block py-2 px-3 rounded-md hover:bg-gray-100 ${theme === 'dark' ? "hover:text-black active:bg-gray-600 active:text-gray-200" : "active:bg-gray-200"} transition-colors duration-100`} onClick={handleMenuItemClick}><i className="ri-focus-2-line text-lg lg:text-sm pt-[2px] ml-3 mr-2"></i>Experience</a></li>
                        <li><a href="#" className={`block py-2 px-3 rounded-md hover:bg-gray-100 ${theme === 'dark' ? "hover:text-black active:bg-gray-600 active:text-gray-200" : "active:bg-gray-200"} transition-colors duration-100`} onClick={handleMenuItemClick}><i className="ri-graduation-cap-line text-lg lg:text-sm pt-[2px] ml-3 mr-2"></i>Education</a></li>
                        <li><a href="#" className={`block py-2 px-3 rounded-md hover:bg-gray-100 ${theme === 'dark' ? "hover:text-black active:bg-gray-600 active:text-gray-200" : "active:bg-gray-200"} transition-colors duration-100`} onClick={handleMenuItemClick}><i className="ri-survey-line text-lg lg:text-sm pt-[2px] ml-3 mr-2"></i>Resume</a></li>
                        <li>
                            <div className={`flex items-center mt-4 py-2 pl-6 rounded-md ${theme === 'dark' ? "active:text-gray-200 active:bg-gray-600" : "active:text-gray-600 active:bg-gray-200"}`}>
                                {theme === 'light' ?
                                    <div className={`flex items-center justify-center cursor-pointer rounded-2xl transition-colors duration-100`} onClick={() => { setTheme("dark"); }}>
                                        <i className="ri-moon-fill text-xl"></i>
                                        <span className="ml-2">Dark Theme</span>
                                    </div> :
                                    <div className={`flex items-center justify-center cursor-pointer rounded-2xl  transition-colors duration-100`} onClick={() => { setTheme("light");}}>
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