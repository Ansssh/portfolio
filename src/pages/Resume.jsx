import React, { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Document, Page, pdfjs  } from 'react-pdf';
import pdf from '../../public/resume.pdf'

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
const Resume = () => {
	const { theme } = useContext(ThemeContext)

	return (
		<div className={`relative w-screen flex justify-center ${theme === "dark" ? "bg-gray-900" : ""} transition-all duration-250 ease-in`}>
			<Document file={pdf} className="flex mt-10 mb-10">
				<Page pageNumber={1} scale={1} />
			</Document>
		</div>
	)
}

export default Resume
