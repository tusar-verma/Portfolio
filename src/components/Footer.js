
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import './Footer.css'

function Footer () {
  return(
    <footer>
      
      <div id="iconsContainer">
        <a className='icon' href="https://github.com/tusar-verma" target={"_blank"} rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="3x"/>
        </a>
        <a className='icon' href='https://www.linkedin.com/in/tusarverma/' target={"_blank"} rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="3x"/>
        </a>

      </div>

      <p>© 2022 Tusar Verma - All Rights Reserved.</p>
    </footer>
  )
}

export default Footer