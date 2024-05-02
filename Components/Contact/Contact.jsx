import React from 'react'
import "./Contact.css"
import theme_pattern from "../../assets/omega.png"
import mail_icon from "../../assets/mail.png"
import location_icon from "../../assets/location.png"
import call_icon from "../../assets/call.png"

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "8a392f65-9494-4027-96f5-64392afb4447");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };



  return (
    <div id="contact" className="contact">
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects , so feel free to contact me .</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>nasir.mansuri2912@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>8401781356</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>Jubail, KSA</p>
                    </div>    
                </div>
            </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name"/>
            <label htmlFor="">Your email</label>
            <input type="text" placeholder="Enter your email" name="email" />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
            <button className="contact-submit">Submit now</button>
        </form>    
        </div>
    </div>
  )
}

export default Contact