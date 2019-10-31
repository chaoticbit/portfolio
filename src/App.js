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
                    <div className="flex justify-end">
                        <div className="text-center text-white px-4 py-2 m-2">
                            <Link to="/">Projects</Link>
                        </div>
                        <div className="text-center text-white px-4 py-2 m-2">About</div>
                        <div className="text-center text-white px-4 py-2 m-2">Contact</div>
                    </div>        
                    <div className="flex justify-start">
                        <div className="miniBio">
                            <div>Hello, Hello —</div><br />I’m Atharva Dandekar, 
                            a programmer/web-developer/designer focused on Innovating, product building, 
                            website/app design and interface design.                         
                        </div>
                    </div>                                                                      
                </div>
            </div>
            <Route exact path="/" component={Projects} />
        </div>
    </BrowserRouter>
  );
}

export default App;
