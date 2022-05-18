import Nav from './components/Nav'; 
import Project from './components/Project';
import './App.css'

function App() {
  return (
    <div className="App">
      <Nav/>
      <h1>Portfolio</h1>
      <Project
        imgRef={require("./images/sketchpad.png")}
        pageRef="https://tusar-verma.github.io/Sketchpad/"
      />
      <Project
        imgRef={require("./images/rockpaperscissors.png")}
        pageRef="https://tusar-verma.github.io/rockpapersicissors/"
      />
      <Project
        imgRef={require("./images/calculator.png")}
        pageRef="https://tusar-verma.github.io/Calculator/"
      />
    </div>
  );
}

export default App;
