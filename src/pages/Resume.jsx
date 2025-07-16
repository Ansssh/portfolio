import React, { useContext, useState, useEffect } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from '../../public/resume.pdf'

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
const Resume = () => {
	const { theme } = useContext(ThemeContext)
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [])
	console.log(width)

	return (
		<div className={`relative h-screen w-screen flex justify-center ${theme === "dark" ? "bg-gray-900" : ""} transition-all duration-250 ease-in`}>
			<Document file={pdf} className="flex mt-10 mb-10 self-start">
				<Page pageNumber={1} scale={width > 1000 ? 1.2 : width > 870 ? 1 : width > 760 ? 0.9 : width > 640 ? 0.7 : width > 550 ? 0.7 : width > 450 ? 0.6 : 0.5}/>
			</Document>
		</div>
	)
}

export default Resume
