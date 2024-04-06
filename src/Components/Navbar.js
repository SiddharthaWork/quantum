import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
// import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
// import {Link} from 'react-scroll';
import { Link } from 'react-router-dom';
import { RiTeamLine } from "react-icons/ri";
import { FaServicestack } from "react-icons/fa";


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      link: "/",
    },
    {
      text: "About us",
      icon: <InfoIcon />,
      link: "/about",

    },
    {
      text: "Services",
      icon: <FaServicestack />,
      link: "/work",

    },
    {
      text: "Team",
      icon: <RiTeamLine />,
      link: "/team",
      
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      link: "/form",
      
    },
   
  ];
  return (
    <nav>
    <div className="nav-logo-container" style={{ display: 'flex', alignItems: 'center' }}>
      <Link to="/" >
    <img src={Logo} alt="" style={{ width: '70px', height: 'auto',marginTop: '10px' }} />
    </Link>
    {/* <h1 style={{ marginLeft: '10px' }}>Quantum Compiler</h1> */}
</div>



      <div className="navbar-links-container">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/team">Team</Link>
      <Link to="/work">Services</Link>
      <Link to="/form"> <button className="primary-button">Contact Now</button></Link>

        {/* <Link to="aboutus"
      spy={true}
      smooth={true}
      offset={50}
      duration={500} href="">About Us</Link> */}
        {/* <Link to="services"
      spy={true}
      smooth={true}
      offset={10}
      duration={500} href="">Services</Link>
        <Link to="more"
      spy={true}
      smooth={true}
      offset={50}
      duration={500} href="">Works</Link> */}
        {/* <Link to="team"
      spy={true}
      smooth={true}
      offset={50}
      duration={500} href="">Team</Link> */}
      {/* <Link to="contact"
      spy={true}
      smooth={true}
      offset={2}
      duration={500} href="">
        <button className="primary-button">Contact Now</button></Link> */}
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
           <List>
            {menuOptions.map((item, index) => (
              <Link key={index} to={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItem button>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar; 
