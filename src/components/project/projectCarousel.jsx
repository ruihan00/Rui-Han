import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
function ProjectCarousel(props) {
    const images = props.data
    return <Carousel className="project-card-img-container" 
    showThumbs={false} 
    showStatus={false}
    infiniteLoop={true}
    transitionTime={1} 
    autoPlay={true}
    interval={4000}>
        {images.map(img => <div>
            <img className="project-card-img" src = {img}/>
        </div>)}

    </Carousel>
}

export default  ProjectCarousel