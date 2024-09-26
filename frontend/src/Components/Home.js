import React from 'react';
import Lottie from  "lottie-react";
import Animation from "../LottieFiles/Animation.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";
import woking from '../LottieFiles/woking.json';
import DarkMode from "./DarkMode.js";

const Home = () => {
  return (
    <div >
      <br></br>
      <DarkMode/>
      <div className='HomePage'>
      
        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Anuja Dewnim</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={Animation} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
          Highly motivated and aspiring software engineering undergraduate student with a passion for technology and innovation. Proficient in multiple programming languages and experienced in developing robust and scalable applications.<br /><br />
          </p>
        </div>
        {/* <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt> */}

        <Lottie 
                  className="illustration" 
                  animationData={woking} 
                  loop={true} 
        />
      </div>
    </div>
  )
}

export default Home