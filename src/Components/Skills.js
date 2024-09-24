import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaHtml5, FaCss3Alt, FaPhp, FaLaravel } from "react-icons/fa";
import { DiNodejs, DiJavascript1, DiCodeigniter, DiMysql } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiVercel } from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>,
        HTML: <FaHtml5/>,
        CSS: <FaCss3Alt/>,
        PHP: <FaPhp/>,
        Laravel: <FaLaravel/>,
        CodeIgniter: <DiCodeigniter/>,
        MySQL: <DiMysql/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills