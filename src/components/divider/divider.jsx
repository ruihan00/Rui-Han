import React from "react"
import "./divider.css"

function Divider(props) {
    const type = "section-bubble" +props.type
    return <div className={type}>

    </div>
}

export default Divider;