import React from 'react'
import "./css/Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"


function Contact() {
  return (
    <div >
      <a href="https://github.com/tusar-verma" target={"_blank"} rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} size="4x"/>
        <FontAwesomeIcon icon={faLinkedin} size="4x"/>
      </a>
      <p></p>
     
    </div>
  )
}

export default Contact