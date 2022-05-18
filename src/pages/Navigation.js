import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <Link to="/">Sobre mi</Link>
        <Link to="/MyProjects">Mis proyectos</Link>
        <Link to="/Contact">Contacto</Link>
      </nav>
      <Outlet />
    </>
  )
};

export default Navigation;