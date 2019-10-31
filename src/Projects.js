import React from "react";
import Thumbnail from './Thumbnail';
import './App.css';

const Projects = (props) => {
    return (
        <div className="container mx-auto mt-10">
            <div className="flex flex-wrap">
                <div className="w-full sm:w-full md:w-1/2 lg:w-1/2">
                    <Thumbnail 
                        image="https://cdn.pixabay.com/photo/2017/07/01/19/48/background-2462431_1280.jpg"                    
                        overlay={true}
                        title="Flagship Badges"
                    />
                </div>
                <div className="w-full sm:w-full md:w-1/2 lg:w-1/2">
                    <Thumbnail 
                        overlay={false}
                    />
                </div>
            </div>
            <div className="flex">
                <div className="w-full">
                    <Thumbnail />
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full sm:w-full md:w-1/2 lg:w-1/2">
                    <Thumbnail />
                </div>
                <div className="w-full sm:w-full md:w-1/2 lg:w-1/2">
                    <div className="flex flex-wrap">
                    <div className="w-full sm:w-full md:w-1/2 lg:w-1/2">
                        <Thumbnail />
                    </div>
                    <div className="w-full sm:w-full md:w-1/2 lg:w-1/2">
                        <Thumbnail />
                    </div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Projects;