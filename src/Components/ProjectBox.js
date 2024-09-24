import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const [isModalOpen, setModalOpen] = useState(false); // State to control modal visibility

  const desc = {
    AgriFirstDesc: "Crop Disease Diagnosis System | Machine Learning driven solution for crop disease detection",
    AgriFirstGithub: "https://github.com/AnujaLd/agriFirst.LK-ML",
    // AgriFirstWebsite: "https://AgriFirst.vercel.app/",
  };

  let show = '';
  if (desc[projectName + 'Github'] === "") {
    show = "none";
  }

  const toggleModal = () => {
    setModalOpen(!isModalOpen); // Toggle modal visibility
  };

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />

        <a style={{ display: show }} href={desc[projectName + 'Github']} target='_blank' rel="noopener noreferrer">
          <button className='projectbtn'><FaGithub /> Github</button>
        </a>

        <button className='projectbtn' onClick={toggleModal}>
          More Info
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={toggleModal}>&times;</span>
              <p> This research aims to develop a crop disease 
              diagnosis system using Convolutional Neural Networks (CNN) to assist farmers in timely and 
              accurate disease detection. We developed the model by training it with 10,095 images of 12 
              crops affected by 35 diseases, including 885 images of tea leaves and 210 images of rose leaves 
              collected through field visits across Sri Lanka. Requirements were gathered through surveys, 
              interviews, and questionnaires with farmers and stakeholders. By training the model for 40 
              epochs, we achieved a model accuracy of 96.2%. The system, developed using agile 
              methodology, includes a user-friendly web application for farmers to upload crop images for 
              disease detection, with a backend built using Flask and integrated with a pre-trained CNN 
              model that processes the images to provide disease identification and treatment 
              recommendations, and also features a comprehensive dashboard presenting statistical 
              information and analytics for valuable user insights. The system's high accuracy and actionable 
              insights contribute to improved crop management and productivity, benefiting the agricultural 
              sector in Sri Lanka.
              </p>
              {<p></p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
