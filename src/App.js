import Home from './Components/Home';
import { BrowserRouter , Route ,Routes } from "react-router-dom";
import './App.css';
import About from './Components/About';
import Project from './Components/Project';
import Education from './Components/Education';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" exact  element={<Home/>} />
       <Route path="/About" exact  element={<About/>} />
       <Route path="/Project" exact  element={<Project/>} />
       <Route path="/Education" exact  element={<Education/>} />
       <Route path="/Gallery" exact  element={<Gallery/>} />
       <Route path="/Contact" exact  element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
