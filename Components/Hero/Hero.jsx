import React from 'react'
import './Hero.css'
import profile_img from "C:/Users/nasir/portfolio-react/src/assets/profile_img.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume_pdf from "../../assets/resume-single.pdf";

const Hero = () => {
  return (
    <div id ="home" className ='hero'>
        <img src={profile_img} alt=""/>
        <h1><span>I'm Nasir Mansuri,</span> frontend developer based in Saudi Arabia.</h1>
        <p>I am a frontend developer from Al-Jubail, KSA with 5 years of experience in companies like Tesla,Microsoft,apple etc.</p>
        <div className="hero-action">
        <a className="hero-connect" href="https://www.linkedin.com/in/nasir-mansuri-26a0a6205/" target="_blank" rel="noopener noreferrer">Linkedin</a>
        <a className="hero-resume" href={resume_pdf} >My resume</a>
        
        
        </div> 
    </div>
  )
}

export default Hero