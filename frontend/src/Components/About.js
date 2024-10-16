import React, { useState } from 'react';
import Modal from './Modal';
import Tilt from 'react-parallax-tilt';
import Lottie from 'lottie-react';
import Programmer from '../LottieFiles/Programmer.json';
import DS from '../images/DS.png';
import sltc from '../images/sltc.png';

const About = () => {
  const [isSLTCModalOpen, setIsSLTCModalOpen] = useState(false);
  const [isDSModalOpen, setIsDSModalOpen] = useState(false);

  const openSLTCModal = () => setIsSLTCModalOpen(true);
  const closeSLTCModal = () => setIsSLTCModalOpen(false);

  const openDSModal = () => setIsDSModalOpen(true);
  const closeDSModal = () => setIsDSModalOpen(false);

  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
          <p>
            Hi, I'm <strong>Anuja Dewnim</strong>, a passionate software engineer from <strong>Colombo</strong>. 
            I hold a <strong>BSc (Hons) in Information Technology</strong>, specializing in <strong>Software Engineering</strong>, 
            from <strong>Sri Lanka Technological Campus (SLTC Research University)</strong> with a <strong>CGPA of 3.0</strong>.
          </p>
        </div>
        <div>
          <Tilt>
            <Lottie className="illustration" animationData={Programmer} loop={true} />
          </Tilt>
        </div>
      </div>

      <h1 className='EducationHeading'>Education</h1>
      <div className='educationSection'>
        <div className='educationItem'>
          <img src={sltc} alt="BTech CSE" className='educationImage'/>
          <div>
            <br />
            <h2>B.Sc (Hons) Information Technology <br/>Specialized in Software Engineering</h2>
            <p>SLTC Research University - Colombo</p>
            <p>2020 - 2024</p>
            <button className='modalBtn' onClick={openSLTCModal}>More Info</button>
          </div>
        </div>

        <div className='educationItem'>
          <img src={DS} alt="High School" className='educationImage'/>
          <div>
            <br/>
            <h2>High School</h2>
            <p>D.S Senanayake College, Colombo 07</p>
            <p>Graduated: 2019</p>
            <button className='modalBtn' onClick={openDSModal}>More Info</button>
          </div>
        </div>
      </div>

      <Modal isOpen={isSLTCModalOpen} onClose={closeSLTCModal}>
        <h2>SLTC Research University</h2>
        <p>Details about the SLTC program, courses, and experiences.</p>
      </Modal>

      <Modal isOpen={isDSModalOpen} onClose={closeDSModal}>
        <h2>D.S Senanayake College</h2>
        <p>Information about my high school experiences and achievements.</p>
      </Modal>
    </>
  );
}

export default About;
