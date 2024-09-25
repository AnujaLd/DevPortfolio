import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from './Components/Navbar';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Resume from "./Components/Resume";
import Project from "./Components/Projects";
import MoveToTop from "./Components/MoveToTop";
import Lottie from  "lottie-react";
// import nightsky from "./LottieFiles/night-sky.json";
import BeatLoader from "react-spinners/BeatLoader";

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);
  
  return (
    <>
      {loading ? (
        <div className="loader"> 
          <BeatLoader
            color={'#9067C6'}
            loading={true}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          {/* <Lottie className="bg" animationData={nightsky} loop={true} />  
          <Lottie className="bgtwo" animationData={nightsky} loop={true} />   
          <Lottie className="bgtemp" animationData={nightsky} loop={true} />  */}
          <Nav/>
          <MoveToTop/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>}/>
            <Route path="/Experience" element={<Experience/>}/>
            <Route path="/Project" element={<Project/>}/>
            <Route path="/Resume" element={<Resume/>}/>
          </Routes>
          <Footer/>
        </div>
      )}  
    </>
  );
}

export default App;