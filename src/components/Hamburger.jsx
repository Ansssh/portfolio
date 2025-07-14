import React, { useRef, useState, useEffect } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hamburger = ({ theme, setAnimationActive, animationActive }) => {
    const ham = useRef()
    const div1 = useRef()
    const div2 = useRef()
    const div3 = useRef()
    const timeLine = useRef()


    // const [animationActive, setAnimationActive] = useState(false) 

    useGSAP(() => {
        timeLine.current = gsap.timeline({ paused: true })
            .to(div1.current, { y: 6, rotation: 45, duration: 0.3, ease: "power2.inOut" }, 0)
            .to(div2.current, { opacity: 0, duration: 0.3, ease: "power2.inOut" }, 0)
            .to(div3.current, { y: -6, rotation: -45, duration: 0.3, ease: "power2.inOut" }, 0);
    }, [])

    useEffect(() => {
        if (timeLine.current) {
            if (animationActive) {
                timeLine.current.play();
            } else {
                timeLine.current.reverse();
            }
        }
    }, [animationActive]);

    function handleClick() {
        setAnimationActive(!animationActive);
        // animation will auto-play via useEffect now
    }

    return (
        <div ref={ham} className='w-4 h-5 relative flex flex-col items-center justify-evenly' onClick={handleClick}>
            <div ref={div1} className={`w-full h-[2px] ${theme === 'dark' ? "bg-white" : "bg-black"} rounded-full`}></div>
            <div ref={div2} className={`w-full h-[2px] ${theme === 'dark' ? "bg-white" : "bg-black"} rounded-full`}></div>
            <div ref={div3} className={`w-full h-[2px] ${theme === 'dark' ? "bg-white" : "bg-black"} rounded-full`}></div>
        </div>
    )
}

export default Hamburger