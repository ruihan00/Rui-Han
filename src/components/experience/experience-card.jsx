import React, { useState } from "react";
import Techstack from "../techstack/techstack";
import techstacks from "../techstack/techstacks";
import "./experience-card.css"
import $ from "jquery"
function ExperienceCard(props) {
    const data = props.data
    const [expand, setExpand] = useState(false);

    const toggleExpand = () => {
        $("#" + data.id).toggleClass("hide")
        $("#experience-expand" + data.id).toggleClass("down")
    }
    function ExperienceDesc(desc) {
        return <div className="experience-card-desc-line">
            <i class="fa-sharp fa-solid fa-caret-right"></i>
            <p>{desc}</p>
        </div>
    }


    function ExpeirenceDetail() {
        return <div className="experience-card-detail hide" id={data.id}>
            <div className="experience-card-desc">
                {data.description.map(desc => ExperienceDesc(desc))}
            </div>
            <div className="experience-card-techstacks">
                {data.techstacks.map(tech => <Techstack data = {tech}/>)}
            </div>
        </div>
    }
    return <div className="experience-card-container">
        <div className="timeline experience-card-line">
            <p className="experience-card-circle"><i class="fa-regular fa-circle"></i></p>
        </div>
        <div className="experience-card">
            <div className="experience-card-header">
                <div className="experience-card-company">
                    {data.name}
                </div>
                <div className="experience-card-sub">
                    <div className="experience-card-title">
                        {data.title}
                    </div>
                    <div className="experience-card-date">
                        {data.start} - {data.end}
                    </div>
                    <div onClick={toggleExpand}>
                        <i class="fa-solid fa-chevron-up experience-expand-btn down" id = {"experience-expand" + data.id}></i> 
                    </div>
                </div>
            </div>
            <div>
                <ExpeirenceDetail/>

            </div>
        </div>
    </div>
}

export default ExperienceCard