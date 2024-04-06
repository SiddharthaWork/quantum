import React from 'react'
import Logo from "../Assets/Logo.png";
import { BsTwitter } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { GoDotFill } from "react-icons/go";
import { IoMailOpen } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="footer-wrapper">
        <div className="footer-section-one">
            <div className="footer-logo-container">
                <img src={Logo} alt="" />
            </div>
            <div className="footer-icons">
                <BsTwitter />
                <SiLinkedin />
                <BsYoutube />
                <FaFacebookF />
            </div>
        </div>
        <div className="footer-section-two">
            <div className="footer-section-columns">
                <h1 className="primarys-heading">COMPANY</h1> 
                 <span><GoDotFill /> Home</span>
                <span><GoDotFill />About Us</span>
                <span><GoDotFill />Services</span>
                <span><GoDotFill />Contact Now</span>
            </div>
            <div className="footer-section-columns">
            <h1 className="primarys-heading">SERVICES</h1> 
                <span><GoDotFill />Web Development</span>
                <span><GoDotFill />App Development</span>
                <span><GoDotFill />Machine Learning</span>
                <span><GoDotFill />Wordpress development</span>
            </div>
            <div className="footer-section-columns">
            <h1 className="primarys-heading">GET IN TOUCH</h1> 
                <span><IoMailOpen /> sales@quantumc.tech</span>
                <span><CiLocationOn /> Kathmandu, Nepal</span>
            </div>
        </div>
    </div>
  )
}

export default Footer