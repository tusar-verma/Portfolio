
import Project from "../components/Project"
import "./css/MyProjects.css"

function MyProjects () {
  return (
    
    <div className="mainContainer">
      <Project
        imgRef={require("../images/sketchpad.png")}
        pageRef="https://tusar-verma.github.io/Sketchpad/"
        desc="Programa similar a paint"
      />
      <Project
        imgRef={require("../images/rockpaperscissors.png")}
        pageRef="https://tusar-verma.github.io/rockpapersicissors/"
        desc="Un piedra papel o tijera al mejor de 5"
      />
      <Project
        imgRef={require("../images/calculator.png")}
        pageRef="https://tusar-verma.github.io/Calculator/"
        desc="Una calculadora basica"
      />
    </div>
  )
}

export default MyProjects