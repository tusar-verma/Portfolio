import "./css/AboutMe.css"

function AboutMe() {
  return (
    <>
      <div className="aboutme">
        
        <img id="profilepic" src={require("../images/profile.jpg")} alt="Profile"/>
        <p>
          Mi nombre es Tusar, tengo 20 años y actualmente estoy haciendo la carrera de Licuenciatura en ciencias de la computación
          en la facultad de ciencias exactas y naturales de la UBA. Tambien me recibí de técnico en computación en la
          escuela técnica n°3 María Sanchez de Thompson. <br></br><br></br>
          Me gusta la programación y aprender sobre ella. Sigo el camino autodidacta además de la facultad, hice varios cursos
          sobre python, web development, git, actualmente me encuentro haciendo el curso de fullstack de codo a codo.<br></br> 
          No tengo experiencia laboral pero he hecho algunos proyectos en grupo con compañeros de estudio, con tecnologías como
          Java, Haskell, Mysql, Arduino. Me gusta trabajar en equipo y siempre que encuentro una dificultad me esmero en
          buscar una solución.
        </p>

      </div>
    </>
  )
}

export default AboutMe