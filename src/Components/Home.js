import React from 'react'
// import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.jpg";
import BannerImage from "../Assets/background.gif";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
   <div id="home" className="home-container">
    {/* <Navbar /> */}
    <div className='home-banner-container'>
        <div className="home-bannerImage-container">
       <img src={BannerBackground} alt=""/>
    </div>
    <div className="home-text-section">
    {/* <div class="typewriter-container"> */}
  {/* <h1 class="primaryess-heading typewriter-text">Welcome to Quantum Compilers</h1> */}
  {/* <h1 class="primaryes-heading typewriter-text">Welcome to <br />Quantum Compilers</h1> */}
  <h1 class="primaryes-heading">
  Welcome to
  <div class="typewriter-container">
    <div class="typewriter-text">Quantum Compilers</div>
  </div>
</h1>


{/* </div> */}
        <p className="primary-text">
        You understand your customers better than anyone. We know that, and we can help you turn that knowledge into results.
        </p>
        <button className="secondary-button">
            Explore <FiArrowRight />
        </button>
    </div>
    <div className="home-image-container">
     <img src={BannerImage} alt="" />





    </div>
    </div>
   </div> 
  )
}

export default Home;