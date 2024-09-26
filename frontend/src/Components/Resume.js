import React, { useState, useEffect } from 'react';
import { BsDownload } from "react-icons/bs";
import pdf from "../Resume.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const [wid, setwid] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null); // Total number of pages in the PDF
  const [pageNumber, setPageNumber] = useState(1); // Current page number

  const handleResize = () => {
    setwid(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Callback when PDF is successfully loaded
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // Functions to navigate between pages
  const goToPrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div className='ResumePage'>
      <Document
        file={pdf}
        className="resumeview"
        onLoadSuccess={onDocumentLoadSuccess} 
      >
        <Page 
          pageNumber={pageNumber} 
          scale={wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1}
        />
      </Document>

      <div className="navigationButtons">
        {}
        {pageNumber > 1 && (
          <button onClick={goToPrevPage} className='prevPageButton'>
            Previous Page
          </button>
        )}

        {}
        {pageNumber < numPages && (
          <button onClick={goToNextPage} className='nextPageButton'>
            Next Page
          </button>
        )}
      </div>

      <a href={pdf} target='_blank' download="Anuja Dewnim CV">
        <button className='downloadCV' type='button'>
          <h3><BsDownload />&nbsp; Download CV</h3>
        </button>
      </a>
    </div>
  );
}

export default Resume;
