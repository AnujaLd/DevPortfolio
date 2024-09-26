import React from 'react';
import ProjectBox from './ProjectBox';
import agriFirstHomePage from '../images/agriFirstHomePage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'><b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={agriFirstHomePage} projectName="AgriFirst" />
      </div>

    </div>
  )
}

export default Projects