import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from 'lottie-react';
import ExperienceAnimation from '../LottieFiles/Experience.json';
import experincearrow from '../LottieFiles/experincearrow.json';
import arrow from '../LottieFiles/arrow.json';
import intern from '../images/intern.png';
import developer from '../images/developer.png';

const Experience = () => {
  return (
    <>
      <div className='ExperiencePage'>
        <div className='ExperienceText'>
          <h1 className='ExperienceTextHeading'><b>Experience </b> Journey</h1>

          <Tilt>
            <Lottie 
              className="illustration" 
              animationData={experincearrow} 
              loop={true} 
            />
          </Tilt>
        </div>
        <div>
          <Tilt>
            <Lottie 
              className="illustration" 
              animationData={ExperienceAnimation} 
              loop={true} 
            />
          </Tilt>
        </div>
      </div>

      {/* Experience Section */}
      <div className='ExperienceSection'>
        <div className='experienceItem'>
          <img src={intern} alt="Intern Software Engineer" className='experienceImage' />
          <div className='experienceDetails'>
            <h2>Intern Software Engineer</h2>
            <p>Company: OREL IT Private Limited</p>
            <p>Duration: August 2023 - February 2024</p>
          </div>
        </div>

        <Tilt>
            <Lottie 
              className="illustration" 
              animationData={arrow} 
              loop={true} 
            />
          </Tilt>

        <div className='experienceItem'>
          <img src={developer} alt="Software Developer" className='experienceImage' />
          <div className='experienceDetails'>
            <h2>Software Developer</h2>
            <p>Company: Ritz Design Center Private Limited </p>
            <p>Duration: June 2024 - Present</p>
          </div>
        </div>
      </div>

      <h1 className='SkillsHeading'>Skill set</h1>
      <div className='skills'>
        <Skills skill='HTML' />
        <Skills skill='CSS' />
        <Skills skill='Javascript' />
        <Skills skill='Bootstrap'/>
        <Skills skill='React' />
        <Skills skill='PHP' />
        <Skills skill='Laravel' />
        <Skills skill='CodeIgniter' />
        <Skills skill='MySQL' />
        <Skills skill='Node' />
        <Skills skill='Git' />
        <Skills skill='Github' />
      </div>
    </>
  );
}

export default Experience;
