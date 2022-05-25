import React from 'react'
import "./css/Contact.css"
import ContactForm from '../components/ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"


function Contact() {
  return (
    <div id="contact">
      <div id="iconsContainer">
        <a className='icon' href="https://github.com/tusar-verma" target={"_blank"} rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="4x"/>
        </a>
        <a className='icon' href='https://www.linkedin.com/in/tusarverma/' target={"_blank"} rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="4x"/>
        </a>

      </div>
      
      <ContactForm/>

    </div>
  )
}

export default Contact