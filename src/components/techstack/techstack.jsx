import React, {useState} from "react";
import techstacks from "./techstacks";
import "./techstack.css"
function Techstack(props) {
    const tech = props.data
    const [hover, setHover] = useState(false)
    const link = techstacks[tech]
    return <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="techstack">
        <img className="techstack-icon" src={link}/>
        {hover ? <p className="techstack-name">{tech}</p>: <p className="none">{tech}</p>}
    </div>
}

export default Techstack