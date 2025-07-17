import React, { useContext, useState, useEffect } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from '../assets/resume.pdf'

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
		<div className={`relative flex flex-1 justify-center ${theme === "dark" ? "bg-gray-900" : ""} transition-all duration-300 ease-in`}>
			<Document file={pdf} className="flex mt-10 mb-10 self-start">
				<Page pageNumber={1} width={Math.min(width * 0.8, 500)}/>
			</Document>
		</div>
	)
}

export default Resume