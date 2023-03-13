import React, { useState } from "react";
import "./sidebar.css"
function SideBarMenu() {
    return <div className="sidebar-menu">
            <div className="sidebar-menu-item">
                Intro
            </div>
            <div className="sidebar-menu-item">
                Experience
            </div>
            <div className="sidebar-menu-item">
                Project
            </div>

    </div>
}
function SideBar() {
    const [open, setOpen] = useState(false)
    const toggleOpen = () => open ? setOpen(false) : setOpen(true)
    return <div className="sidebar">
        <div className="sidebar-icon" onClick={toggleOpen}>
            {open ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars" />}
        </div>
        {open ?  <SideBarMenu/> : <div/>}

    </div>
}

export default SideBar;