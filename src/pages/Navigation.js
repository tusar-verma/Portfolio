import { Outlet, Link } from "react-router-dom";
import "./css/Navigation.css"

const Navigation = () => {
  return (
    <>
      <nav>
        <Link className="link" to="/">Sobre mi</Link>
        <Link className="link" to="/MyProjects">Mis proyectos</Link>
        <Link className="link" to="/Contact">Contacto</Link>
      </nav>
      <Outlet />
    </>
  )
};

export default Navigation;