import { Outlet, Link } from "react-router-dom";
import "./css/Navigation.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons"

const Navigation = () => {

  return (
    <>
      <nav>
        <button id="btnMenu" onClick={toggleMenu}><FontAwesomeIcon icon={faBars} size="2x"/></button>

        <Link className="link" to="/">Sobre mi</Link>
        <Link className="link" to="/MyProjects">Mis proyectos</Link>
        <Link className="link" to="/Contact">Contacto</Link>
      </nav>
      <Outlet />
    </>
  )
};

function toggleMenu (e) {
  e.preventDefault();
  const menuLinks = document.getElementsByClassName('link')

  // https://stackoverflow.com/questions/3871547/iterating-over-result-of-getelementsbyclassname-using-array-foreach
  // getElementsByClassName devuelve un objeto de tipo HTMLCollection y no podes usar forEach
  // con esto se "convierte" para poder usar el foreach
  Array.prototype.forEach.call(menuLinks, function(menuLink) {   
    menuLink.style.display = menuLink.style.display === "" ? "block" : ""
  })
    
}

export default Navigation;