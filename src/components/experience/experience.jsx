import React from "react";
import "./experience.css"
import experiences from "./experience-data";
import { useState, forwardRef } from "react";
import ExperienceCard from "./experience-card";

function Experience(props) {

    return <div ref={props.refTag} className="container">
        <div className="experience-container">
            <h1 className="experience-header">Experiences</h1>
            <div className="experience-inner">
                <div className="experience-nav">
                    {experiences.map(exp => <ExperienceCard data={exp} />)}
                </div>
                {/* <div className="experience-details">
                    <div >
                        <span className="experience-detail-title ">{curr.title}</span>
                        <span> @ </span>
                        <span className="experience-detail-name">{curr.name}</span>
                    </div>

                    <div className="experience-detail-date">
                        {curr.start} - {curr.end}
                    </div>

                    {curr.description.map(
                        desc =>
                            <div className="experience-detail-desc">
                                <i class="fa-solid fa-angle-right" />
                                <span> </span>
                                <div>
                                    {desc}
                                </div>
                            </div>)}


                </div> */}
            </div>
            <div className="experience-down-container">
            <div className="experience-down-btn" onClick={() => props.projectRef.current.scrollIntoView({ behavior: "smooth" })}>
                <i class="fa-solid fa-circle-chevron-down fa-bounce fa-2xl"></i>
            </div>
        </div>
            
        </div>

        <div className="experience-divider">

        </div>

    </div>
}

export default Experience