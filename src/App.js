import { Routes, Route, HashRouter } from "react-router-dom";
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import MyProjects from './pages/MyProjects';
import Navigation from "./pages/Navigation";
import './App.css'

function App() {
  return (
    <HashRouter>        
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<AboutMe />} />
          <Route path="MyProjects" element={<MyProjects />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>      
    </HashRouter>
    );
}

export default App;
