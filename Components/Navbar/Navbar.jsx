import React, { useState, useRef } from 'react';
import './Navbar.css';
import logo from "../../assets/logo3.png";
import underline from "../../assets/img2.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from "../../assets/menu_open.png";
import menu_close from "../../assets/menu_close.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className='navbar'>
      <img src={logo} alt='Logo' />
      <img src={menu_open} onClick={openMenu} alt='' className="nav-mob-open" />
        
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li>
          <AnchorLink className="anchor-link" href="#home" onClick={() => setMenu("home")}>Home</AnchorLink>
          {menu === "home" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about" onClick={() => setMenu("about")}>About Me</AnchorLink>
          {menu === "about" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services" onClick={() => setMenu("services")}>Services</AnchorLink>
          {menu === "services" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work" onClick={() => setMenu("work")}>Portfolio</AnchorLink>
          {menu === "work" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact" onClick={() => setMenu("contact")}>Contact</AnchorLink>
          {menu === "contact" && <img src={underline} alt="Underline" />}
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" href="#contact">Connect With Me</AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
