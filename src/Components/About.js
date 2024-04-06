import React, { useEffect, useRef } from 'react';
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayBtnFill } from 'react-icons/bs';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = aboutRef.current;
      const sectionPosition = aboutSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionPosition < windowHeight) {
        aboutSection.classList.add('show-animation');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={aboutRef} id="aboutus"className="about-section-container"  >
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Learn more about our organization</p>
        <h1 className="primary-heading">Our Mission</h1>
        <p className="primary-text">To establish the company name and the expansion of the company.</p>
        <h1 className="primary-heading">Our Goal</h1>
        <p className="primary-text">To reach every potential customer and provide the best service.</p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayBtnFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
