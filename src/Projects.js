import React from "react";
import Thumbnail from './Thumbnail';
import './App.css';

const Projects = (props) => {
    return (
        <div className="container mx-auto mt-10">
            <div className="flex flex-wrap">
                <div className="w-full sm:w-full md:w-1/3 lg:w-1/3">
                    <Thumbnail 
                        image="https://httpsimage.com/v2/4538636a-8d9e-4b45-a1b2-0a9e95f83279.png"
                        overlay={true}
                        title="Segmented Control React"
                        git="https://www.npmjs.com/segmented-control-react"
                        link="/SegmentedControlReact"
                    />
                </div>
                <div className="w-full sm:w-full md:w-1/3 lg:w-1/3">
                    
                </div>
                <div className="w-full sm:w-full md:w-1/3 lg:w-1/3">
                    
                </div>
            </div>
            <div className="flex">
                
            </div>
            <div className="flex flex-wrap">
                
                <div className="w-full sm:w-full md:w-1/2 lg:w-1/2">
                    <div className="flex flex-wrap">
                    <div className="w-full sm:w-full md:w-1/2 lg:w-1/2">
                
                    </div>
                    <div className="w-full sm:w-full md:w-1/2 lg:w-1/2">
                
                    </div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Projects;