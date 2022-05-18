
import Project from "../components/Project"

function MyProjects () {
  return (
    
    <div className="App">
      <h1>Portfolio</h1>
      <Project
        imgRef={require("../images/sketchpad.png")}
        pageRef="https://tusar-verma.github.io/Sketchpad/"
      />
      <Project
        imgRef={require("../images/rockpaperscissors.png")}
        pageRef="https://tusar-verma.github.io/rockpapersicissors/"
      />
      <Project
        imgRef={require("../images/calculator.png")}
        pageRef="https://tusar-verma.github.io/Calculator/"
      />
    </div>
  )
}

export default MyProjects