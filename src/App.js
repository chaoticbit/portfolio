import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Projects from "./Projects.js";
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <div className="App">        
            <div className="header">                
                <div className="container mx-auto">
                    <div className="flex justify-start md:justify-end lg:justify-end xl:justify-end">
                        <div className="text-center text-white p-0 md:px-4 py-2 m-2">
                            <Link to="">Resume</Link>
                        </div>
                        <div className="text-center text-white p-0 md:px-4 py-2 m-2">About</div>                        
                        <div className="text-center text-white p-0 md:px-4 py-2 m-2">
                        <a href="https://www.github.com/chaoticbit/" rel="noopener noreferrer" className="hover:text-teal-400" target="_blank">Github</a>
                        </div>
                        <div className="text-center text-white p-0 md:px-4 py-2 m-2">
                            <a href="https://www.linkedin.com/in/atharva-dandekar-498b3078/" rel="noopener noreferrer" className="hover:text-teal-400" target="_blank">LinkedIn</a>
                        </div>
                    </div>        
                    <div className="flex justify-between">
                        <div className="miniBio text-white italic-style">
                            <div>Hello, Hello —</div><br />I’m Atharva Dandekar, 
                            a programmer, web-developer, UI/UX enthusiast focused on product building, 
                            website/app design, functional JavaScript, user research & interface design.                         
                        </div>
                        <div className="illustration one justify-end"></div>
                    </div>                                                                      
                </div>                
            </div>
            <div className="bodyContainer">
                <Route exact path="/" component={Projects} />
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
