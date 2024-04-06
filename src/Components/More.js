import React from 'react';
import ProfilePic from "../Assets/john-doe-image.png"
import { TiTick } from "react-icons/ti";


const More = () => {
  return (
    <div id="more" className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">
            OUR WORKS
            </p>
            <p className="primary-heading">Introduction to our projects</p>
            <p className="primaryy-text">
            We help brands of all kind and businesses of every size grow their online revenue.
            </p>
        </div>
        <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="" />
            <p>
                We made an fully responsive ecommerce website.
            </p>
            <div className="testimonials-stars-container">
          <TiTick />
          <TiTick />
          <TiTick />
          <TiTick />
          <TiTick />
               
            </div>
            <h2>Real Daam</h2>
        </div>
    </div>
  )
}

export default More