{/*import React from 'react';
import "./Services.css";
import Services_Data from "../../assets/services_data";
import theme_pattern from "../../assets/omega.png";
import arrow_icon from "../../assets/arrow.png";

const Services = () => {
  return (
    <div id="services" className="services">
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme_pattern} alt="Theme Pattern" />
        </div>
        <div className="services-container">
            {Services_Data.map((service,index) => {
                return <div key={index} className="services-format">
                  <h3>{service.s_no}</h3>  
                  <h2>{service.s_name}</h2> 
                  <p>{service.s_desc}</p> 
                  <div className="services-readmore"> 
                    <p>Read More</p>
                    <img src={arrow_icon} alt="" />
                  </div> 
                </div>
            })}
        </div>
    </div>
  )
}

export default Services;*/}


import React, { useState } from 'react';
import './Services.css';
import Services_Data from '../../assets/services_data';
import theme_pattern from '../../assets/omega.png';
import arrow_icon from '../../assets/arrow.png';

const Services = () => {
  const [expandedServiceIndex, setExpandedServiceIndex] = useState(-1);

  const handleReadMore = (index) => {
    // Toggle expanded state for the selected service index
    setExpandedServiceIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            {/* Display full description if expandedServiceIndex matches the current index */}
            <p>{expandedServiceIndex === index ? service.s_desc : `${service.s_desc.slice(0, 60)}...`}</p>
            <div className="services-readmore">
              {/* Toggle Read More button text based on expanded state */}
              <p onClick={() => handleReadMore(index)}>{expandedServiceIndex === index ? 'Read Less' : 'Read More'}</p>
              <img src={arrow_icon} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

