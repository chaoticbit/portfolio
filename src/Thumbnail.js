import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Thumbnail = (props) => {                
    return (
        <div className="flex p-5">
            <div className="w-full rounded-lg shadow-md bg-white relative overflow-hidden p-5">            
                <div className="flex">
                    <div className="w-full">                        
                        <img src={props.image} alt="segmented-control-react" />
                    </div>  
                </div>
                <div className="flex">                 
                    <div className="flex w-full h-8 pt-3 justify-between items-center">
                        <Link to={props.link}><p className="regular-style text-left text-md md:text-xs lg:text-xl hover:underline">{props.title}</p></Link>
                        <a href={props.git} target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/color/48/000000/npm.png" style={{height:"32px"}} alt="npm"/></a>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Thumbnail;