import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from 'lottie-react';
import Programmer from '../LottieFiles/Programmer.json';

import DS from '../images/DS.png';
import sltc from '../images/sltc.png';


const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
          <p>
            Hi, I'm <strong>Anuja Dewnim</strong>, a passionate software engineer from <strong>Colombo</strong>. 
            I hold a <strong>BSc (Hons) in Information Technology</strong>, specializing in <strong>Software Engineering</strong>, 
            from <strong>Sri Lanka Technological Campus (SLTC Research University)</strong> with a <strong>CGPA of 3.0</strong>.
            With over <strong>1 year of experience</strong> in both front-end and back-end development, 
            I have developed a solid foundation in building efficient and scalable software solutions.
            I completed my secondary education at <strong>DS Senanayake College</strong>, Colombo 07, 
            in the <strong>Art Stream</strong>, achieving results of A, B, and C.
          </p>
        </div>
        <div>
          <Tilt>
            <Lottie 
              className="illustration" 
              animationData={Programmer} 
              loop={true} 
            />
          </Tilt>
        </div>
      </div>

      {/* Education Section */}
      <h1 className='EducationHeading'>Education</h1>
      <div className='educationSection'>
        <div className='educationItem'>
          <img src={sltc} alt="BTech CSE" className='educationImage'/>
          <div>
            <br />
            <h2>B.Sc (Hons) Information Technology <br/>Specialized in Software Engineering</h2>
            <p>SLTC Research University - Colombo</p>
            <p>2020 - 2024</p>
          </div>
        </div>

        <div className='educationItem'>
          <img src={DS} alt="High School" className='educationImage'/>
          <div class="education-section">
            <br/>
            <h2>High School</h2>
            <p>D.S Senanayake College, Colombo 07</p>
            <p>Graduated: 2019</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
