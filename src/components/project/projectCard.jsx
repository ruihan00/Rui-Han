import React from "react";
import Techstack from "../techstack/techstack";
import "./projectCard.css"
import ProjectCarousel from "./projectCarousel";
function ProjectCard(props) {
    const data = props.data
    const setData = props.setData
    function ProjectLinks() {
        const keys = Object.keys(data.links)
        
        return <div className="project-card-link-container">
            {keys.map(key => <a className="project-card-link" href={data.links[key]}>{key}</a>)}
        </div>
    }
    const handleClick = () => {
        setData(data)
        console.log(data)
    }
    return <div className="project-card" onClick={handleClick}>
        <ProjectCarousel data = {data.img}/>
        <div className="project-card-desc-container">
            <div className="project-card-header-container">
                <div className="project-card-name">{data.name}</div>
                <ProjectLinks/>
            </div>

            <div className="project-card-desc">
                {data.short}
            </div>
            <div className="project-card-techstack-container">
                {data.techstack.map(tech => <Techstack data={tech} />)}
            </div>
        </div>

    </div>
}

export default ProjectCard