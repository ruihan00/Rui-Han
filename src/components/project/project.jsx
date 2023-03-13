import React, {useState} from "react";
import "./project.css"
import projectData from "./projectData";
import ProjectCard from "./projectCard";
function Project() {
    const [curr, setCurr] = useState(null)
    return <div className="container">
        <div className="project-container">
            <h1 className="project-header">Projects</h1>
            <div className="project-card-container">
            {projectData.map(proj => <ProjectCard data = {proj} setData = {setCurr}/>)}

            </div>
        </div>
        <div className="project-divider"/>
    </div>
}

export default Project;