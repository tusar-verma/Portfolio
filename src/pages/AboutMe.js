import "./css/AboutMe.css"

function AboutMe() {
  return (
    <div className="aboutme">        
      <img id="profilepic" src={require("../images/profile.jpg")} alt="Profile"/>
      <p className="description">
        Mi nombre es Tusar, tengo 20 años y actualmente estoy haciendo la carrera de Licenciatura en ciencias de la computación
        en la facultad de ciencias exactas y naturales de la UBA. También me recibí de técnico en computación en la
        escuela técnica N°3 María Sanchez de Thompson. <br></br><br></br>
        Me gusta la programación y aprender sobre ella, sigo el camino autodidacta además de la facultad. Hice varios cursos
        sobre python, web development y git. Actualmente me encuentro haciendo el curso de fullstack de codo a codo.<br></br> 
        No tengo experiencia laboral pero he hecho algunos proyectos en grupo con compañeros de estudio, con tecnologías como
        Java, Haskell, Mysql, Arduino, SQL server. Me gusta trabajar en equipo y siempre que encuentro una dificultad me esmero en
        buscar una solución.
      </p>
      <p>Donde estudio</p>
      <iframe title="fac" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4515.392927247996!2d-58.44198191718765!3d-34.54284335507586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb43f484b6f0f%3A0x445926222f7a265e!2sCiudad%20Universitaria%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1655849712494!5m2!1ses!2sar" width="300" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default AboutMe