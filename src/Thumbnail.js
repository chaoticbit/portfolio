import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Overlay = (props) => {
    props = props.props;
    if(props.overlay) {
        return(
            <div className="overlay bottom-0 w-full absolute h-32 text-left">                
                <div className="blur w-full h-full p-5 pl-10 ">
                    <h2 className="text-white brownLight text-2xl">{props.title}</h2>
                    <p className="text-white text-md brownLight">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                </div>
            </div>
        )
    } else 
        return null;
}

const Thumbnail = (props) => {                
    return (
        <div className="flex p-5">
            <div className="w-full shadow-md bg-gray-200">
                <Link to="">
                    <div className="rounded-lg thumbnailBgContainer relative bg-cover bg-center" style={{backgroundImage: `url(${props.image})`}}>                                                                     
                        <Overlay props={props} />                   
                    </div>                    
                </Link>
            </div>
        </div>
    )
}

export default Thumbnail;