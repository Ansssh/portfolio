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
		<div className={`relative flex flex-col items-center flex-1  ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gradient-to-tr from-white to-gray-400 text-black"} transition-all duration-300 ease-in pt-10 pb-10`}>
			<a
				href={pdf}
				download="Lord Ansh Kumar"
				className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-gray-300 hover:bg-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-300 ease-in-out gap-2"
			>
				<i className="ri-download-cloud-2-line pt-[2px]"></i>
				Download CV
			</a>
			<Document file={pdf} className="flex mt-5 mb-5">
				<Page pageNumber={1} width={Math.min(width * 0.75, 700)} />
			</Document>

			<a
				href={pdf}
				download="Lord Ansh Kumar"
				className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-gray-300 hover:bg-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-300 ease-in-out gap-2"
			>
				<i className="ri-download-cloud-2-line pt-[2px]"></i>
				Download CV
			</a>
		</div>
	)
}

export default Resume