import logo from './logo.svg';
import './App.css';
import Divider from './components/divider/divider.jsx';
import Title from './components/title/title';
import Experience from './components/experience/experience';
import Project from './components/project/project';
import Constellation from './components/title/constellation';
import Footer from './components/footer/footer';
import SideBar from './components/sidebar/sidebar';
import { useRef } from 'react';
function App() {
  const experienceRef = useRef()
  const projectRef = useRef()
  return (
    <div className="App">
        <Constellation/>
        {/* <SideBar/> */}
        
        <Title experienceRef = {experienceRef}/>

        <Experience refTag ={experienceRef} projectRef={projectRef}/>
        <Project refTag={projectRef}/>
        <Footer/>
    </div>
  );
}

export default App;
