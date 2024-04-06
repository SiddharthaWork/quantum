import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./ScrollButton.css"; // Import CSS file for styling

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`scroll-button ${visible ? 'visible' : ''}`} onClick={scrollToTop}>
      <FaArrowCircleUp />
    </div>
  );
};

export default ScrollButton;
