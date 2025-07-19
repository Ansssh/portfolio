import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import emailjs from '@emailjs/browser';

// --- HIRE ME COMPONENT (Corrected) ---
// Moved outside HomePage to preserve state. It now accepts a `theme` prop.
const HireMe = ({ theme }) => {
    const [step, setStep] = useState(localStorage.getItem("G^#1)0L") ? 3 : 1);
    const [formData, setFormData] = useState({
        name: "",
        mail: "",
        contact: "",
        message: ""
    });
    const [errors, setErrors] = useState({});

    // Dynamic classes based on theme
    const isDark = theme === 'dark';
    const containerClasses = isDark ? 'bg-slate-800' : 'bg-white';
    const primaryText = isDark ? 'text-white' : 'text-gray-900';
    const secondaryText = isDark ? 'text-slate-400' : 'text-gray-500';
    const inputBg = isDark ? 'bg-slate-700' : 'bg-gray-100';
    const inputBorder = isDark ? 'border-slate-600' : 'border-gray-300';
    const ringOffset = isDark ? 'focus:ring-offset-slate-800' : 'focus:ring-offset-white';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: null
            }));
        }
    };

    const validateStep1 = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
        if (!formData.mail.trim()) {
            newErrors.mail = 'An email address is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.mail)) {
            newErrors.mail = 'Please enter a valid email address.';
        }
        if (!formData.contact.trim()) {
            newErrors.contact = 'A mobile number is required.';
        } else if (!/^\d{10}$/.test(formData.contact.replace(/\s/g, ''))) {
            newErrors.contact = 'Please enter a valid 10-digit mobile number.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep2 = () => {
        const newErrors = {};
        if (!formData.message.trim()) newErrors.message = 'A message is required.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep1()) {
            setStep(2);
            setErrors({});
        }
    };

    const handleBack = () => {
        setStep(1);
        setErrors({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateStep2()) {
            // console.log('Form Data Submitted:', formData);
            const serviceId = import.meta.env.VITE_SERVICE_ID;
            const templateId = import.meta.env.VITE_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_PUBLIC_KEY;
            emailjs.send(serviceId, templateId, formData, publicKey)
                .then((response) => {
                    console.log('Email sent successfully!', response.status, response.text);
                    localStorage.setItem("G^#1)0L", true)
                    setStep(3);
                })
                .catch((err) => {
                    console.error('Failed to send email. Error: ', err);
                    alert('There was an error sending your message. Please try again later.');
                });

        }
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div key="step1">
                        <h2 className={`text-3xl font-bold ${primaryText} text-center mb-2`}>Let's Connect</h2>
                        <p className={`text-center ${secondaryText} mb-8`}>Start by telling me who you are.</p>
                        <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} noValidate className="space-y-5">
                            <div>
                                <input
                                    type="text" name="name" value={formData.name} onChange={handleChange}
                                    placeholder="Your Name" aria-label="Your Name"
                                    className={`w-full ${inputBg} ${primaryText} placeholder-slate-400 border ${errors.name ? 'border-red-500' : inputBorder} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all`}
                                />
                                {errors.name && <p className="text-red-400 text-sm mt-2">{errors.name}</p>}
                            </div>
                            <div>
                                <input
                                    type="email" name="mail" value={formData.mail} onChange={handleChange}
                                    placeholder="Your Email" aria-label="Your Email"
                                    className={`w-full ${inputBg} ${primaryText} placeholder-slate-400 border ${errors.mail ? 'border-red-500' : inputBorder} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all`}
                                />
                                {errors.mail && <p className="text-red-400 text-sm mt-2">{errors.mail}</p>}
                            </div>
                            <div>
                                <input
                                    type="tel" name="contact" value={formData.contact} onChange={handleChange}
                                    placeholder="Your Mobile Number" aria-label="Your Mobile Number"
                                    className={`w-full ${inputBg} ${primaryText} placeholder-slate-400 border ${errors.contact ? 'border-red-500' : inputBorder} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all`}
                                />
                                {errors.contact && <p className="text-red-400 text-sm mt-2">{errors.contact}</p>}
                            </div>
                            <button
                                type="submit"
                                className={`w-full bg-cyan-500 text-white font-bold py-3 px-4 rounded-lg mt-3 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 ${ringOffset} focus:ring-cyan-500 transition-all transform hover:scale-105`}
                            >
                                Next →
                            </button>
                        </form>
                    </div>
                );
            case 2:
                return (
                    <div key="step2">
                        <h2 className={`text-3xl font-bold ${primaryText} text-center mb-2`}>Your Message</h2>
                        <p className={`text-center ${secondaryText} mb-8`}>What's on your mind, <span className="font-semibold text-cyan-400">{formData.name.split(' ')[0]}</span>?</p>
                        <form onSubmit={handleSubmit} noValidate>
                            <textarea
                                name="message" value={formData.message} onChange={handleChange}
                                placeholder="Enter your message here..." aria-label="Your Message" rows="5"
                                className={`w-full ${inputBg} ${primaryText} placeholder-slate-400 border ${errors.message ? 'border-red-500' : inputBorder} rounded-lg min-h-36 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all`}
                            ></textarea>
                            {errors.message && <p className="text-red-400 text-sm mt-2">{errors.message}</p>}
                            <div className="flex flex-col w-full items-center justify-between mt-4 gap-4">
                                <button
                                    type="button" onClick={handleBack}
                                    className={`w-full ${isDark ? 'bg-slate-600 hover:bg-slate-700' : 'bg-gray-200 hover:bg-gray-300'} ${isDark ? 'text-white' : 'text-gray-800'} font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${ringOffset} focus:ring-slate-500 transition-all transform hover:scale-105`}
                                >
                                    ← Back
                                </button>
                                <button
                                    type="submit"
                                    className={`w-full bg-cyan-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 ${ringOffset} focus:ring-cyan-500 transition-all transform hover:scale-105`}
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                );
            case 3:
                return (
                    <div key="step3" className="text-center">
                        <svg className="mx-auto h-16 w-16 text-cyan-300" fill="cyan" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5.45455 15L1 18.5V3C1 2.44772 1.44772 2 2 2H17C17.5523 2 18 2.44772 18 3V15H5.45455ZM4.76282 13H16V4H3V14.3851L4.76282 13ZM8 17H18.2372L20 18.3851V8H21C21.5523 8 22 8.44772 22 9V22.5L17.5455 19H9C8.44772 19 8 18.5523 8 18V17Z"></path>
                        </svg>
                        <h2 className={`text-3xl font-bold ${primaryText} mt-6 mb-2`}>Message Sent!</h2>
                        <p className={`${isDark ? 'text-slate-300' : 'text-gray-600'} text-lg font-light`}>
                            Hang tight! I've received your message and will get back to you soon.
                        </p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="w-full">
            <div id="form-container" className={`${containerClasses} rounded-2xl shadow-2xl p-8 transition-all duration-500 flex flex-col justify-center`}>
                {renderStep()}
            </div>
        </div>
    );
};


// --- HOME PAGE COMPONENT ---
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