import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"
import { FaFacebook} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <h4>Copyright &copy; 2024</h4>
      
      <div className='footerLinks'>
        <a href="https://github.com/AnujaLd" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/anuja-dewnim/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:isanujadewnim@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://www.facebook.com/yourFacebookProfile" target='blank'><FaFacebook/></a> 
      </div>
    </footer>
  )
}

export default Footer