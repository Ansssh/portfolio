import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

// MUI Imports
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

// Asset Imports
import python from '../assets/python-icon.svg';
import reac from '../assets/reactjs-icon.svg';
import html from '../assets/w3_html5-icon.svg';
import css from '../assets/w3_css-icon~old.svg';
import js from '../assets/javascript-icon.svg';
import node from '../assets/nodejs-icon.svg';
import Express from '../assets/expressjs-icon.svg?react';

// 1. Wrap JobCard in React.memo for a performance boost.
// It prevents re-rendering if props haven't changed.
const JobCard = React.memo(function JobCard({ jobDetails, index }) {
    const { theme } = useContext(ThemeContext);
    const [showFullDescription, setShowFullDescription] = useState(false);
    function toggleDescription() {
        setShowFullDescription(!showFullDescription);
    }
    return (
        <div className={`${theme === "dark" ? "bg-gray-800 text-white" : `bg-gradient-to-r ${index % 2 === 0 ? "from-gray-100 to-gray-200" : "from-gray-200 to-gray-100"}`} flex flex-col border rounded-lg  p-4`}>
            <div className={`flex flex-col gap-1`}>
                <p className='text-lg sm:text-lg font-bold'>{jobDetails.title}</p>
                <p className='text-sm sm:text-md font-light italic'>{jobDetails.duration}</p>
            </div>
            <div className={`flex gap-2 flex-wrap ${index % 2 === 0 ? "" : "lg:justify-start lg:flex-row-reverse"} my-2`}>
                <p className={`text-sm font-extralight border border-gray-400 px-2 ${theme === "dark" ? "hover:bg-gray-600 active:bg-transparent" : "active:bg-gray-300"} select-none rounded-xl`}>{jobDetails.company}</p>
                <p className={`text-sm font-extralight border border-gray-400 px-2 ${theme === "dark" ? "hover:bg-gray-600 active:bg-transparent" : "active:bg-gray-300"} select-none rounded-xl`}>{jobDetails.location}</p>
                <p className={`text-sm font-extralight border border-gray-400 px-2 ${theme === "dark" ? "hover:bg-gray-600 active:bg-transparent" : "active:bg-gray-300"} select-none rounded-xl`}>{jobDetails.jobType}</p>
            </div>
            <hr className='my-2' />
            <p className='text-justify font-light text-sm sm:text-md'>
                {jobDetails.description.length > 100 ? (
                    <>
                        {showFullDescription ? jobDetails.description : `${jobDetails.description.slice(0, 100)}...`}
                        &nbsp;
                        <button
                            onClick={toggleDescription}
                            className="text-blue-500 hover:underline focus:outline-none cursor-pointer"
                        >
                            {showFullDescription ? 'Read Less' : 'Read More'}
                        </button>
                    </>
                ) : (
                    jobDetails.description
                )}
            </p>
            <div className={`flex gap-2 flex-wrap ${index % 2 === 0 ? "" : "lg:justify-start lg:flex-row-reverse"} my-2`}>
                {jobDetails.softSkills.map((skill, i) => (
                    <p key={i} className={`text-sm font-extralight border border-gray-400 px-2 ${theme === "dark" ? "hover:bg-gray-600 active:bg-transparent" : "active:bg-gray-300"} select-none rounded-xl`}>{skill}</p>
                ))}
            </div>
            <hr className='my-2' />
            <div className={`flex gap-2 flex-wrap ${index % 2 === 0 ? "" : "lg:justify-start lg:flex-row-reverse"} my-2`}>
                {jobDetails.skills.map((skill, i) => (
                    <React.Fragment key={i}>
                        {skill.name === "Express" ? (
                            <Express stroke={`${theme === "dark" ? "white" : "black"}`} fill={`${theme === "dark" ? "white" : "black"}`} className="w-6 h-6" />
                        ) : (
                            <img src={skill.image} alt={skill.name} className='h-6' />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
});

const jobs = [
    {
        title: "Science of Science Intern",
        jobType: "Internship",
        location: "IIT Roorkee",
        company: "NPTEL Summer Intern",
        duration: "June 2025 - July 2025",
        description: "Conducted large-scale bibliometric analysis of four premier Information Systems (IS) journals. Used Elsevier API to extract, process and visualize metadata from 6000+ articles using Python.",
        skills: [{ name: "Python", image: python }],
        softSkills: ["Data Visualization", "Data Analysis"]
    },
    {
        title: "Web Developer Intern",
        jobType: "Internship",
        location: "Remote",
        company: "Ryaz.io",
        duration: "Nov 2024 - June 2025",
        description: "Learned the foundations of Web Development including HTML, CSS, JS & React while developing various responsive websites as weekly tasks.",
        skills: [
            { name: "React", image: reac },
            { name: "HTML", image: html },
            { name: "CSS", image: css },
            { name: "JavaScript", image: js },
            { name: "Node.js", image: node }
        ],
        softSkills: ["Web Development", "Problem Solving", "Communication"]
    },
];

const Experience = () => {
    const { theme } = useContext(ThemeContext);

    const timelineItems = jobs.map((job, index) => (
        <TimelineItem key={index}>
            <TimelineSeparator>
                {/* {index > 0 && <TimelineConnector />} */}
                <TimelineConnector />
                <TimelineDot />
                <TimelineConnector />
                {/* {index < jobs.length - 1 && <TimelineConnector />} Could use it? Maybe? Maybenot */}
            </TimelineSeparator>
            <TimelineContent>
                <JobCard jobDetails={job} index={index} />
            </TimelineContent>
        </TimelineItem>
    ));

    return (
        <>
            {/* Mobile View */}
            <div className={`flex flex-col items-center lg:hidden flex-1 gap-2 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100"} pt-0 py-10 px-10 sm:px-30`}>
                <h1 className='text-4xl font-bold mt-5'>Experience</h1>
                <p className='text-sm font-light'>~Ansh Kumar~</p>
                <Timeline
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 },
                        padding: 0,
                    }}>
                    {/* 3. Render the pre-generated list */}
                    {timelineItems}
                </Timeline>
            </div>

            {/* Desktop View */}
            <div className={`lg:flex flex-col items-center gap-2 hidden flex-1 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100"} pt-0 py-10 px-10 sm:px-30`}>
                <h1 className='text-4xl font-bold mt-5'>Experience</h1>
                <p className='text-sm font-light'>~Ansh Kumar~</p>
                <Timeline position='alternate' sx={{ padding: 0 }}>
                    {/* 3. Render the exact same list again */}
                    {timelineItems}
                </Timeline>
            </div>
        </>
    );
};

export default Experience;