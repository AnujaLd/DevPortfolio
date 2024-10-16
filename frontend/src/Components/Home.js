import React, { useEffect } from "react";
import Lottie from "lottie-react";
import Animation from "../LottieFiles/Animation.json";
import Typed from "./Typed.js";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar.png";
import { CiCoffeeCup } from "react-icons/ci";
import woking from "../LottieFiles/woking.json";
import DarkMode from "./DarkMode.js";

const Home = () => {
  useEffect(() => {
    // Tawk.to script integration
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/670f3d464304e3196ad2318b/1ia9oemsn";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <div>
      <br />
      <br />
      <DarkMode />
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>Anuja Dewnim</b>
          </h1>
          <Typed />
        </div>

        <Lottie
          className="illustration"
          animationData={Animation}
          loop={true}
        />
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          <p>
            Highly motivated and aspiring software engineering undergraduate
            student with a passion for technology and innovation. Proficient in
            multiple programming languages and experienced in developing robust
            and scalable applications.
            <br />
            <br />
          </p>
        </div>
        {/* <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt> */}

        <Lottie className="illustration" animationData={woking} loop={true} />
      </div>
    </div>
  );
};

export default Home;
