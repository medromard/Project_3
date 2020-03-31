import React, {useState, UseEffect, useEffect} from 'react';
import M from 'materialize-css';

const Parallax = () => {
    useEffect(()=> {
        let elements = document.querySelectorAll(".parallax");
        M.Parallax.init(elements);
        }, []);

    return(
        
            <div className="parallax-container">
                <div className="parallax"><img src="/assets/Section_background_1.jpg" alt="hero"/>
                <div className="row container caption center-align">
                        <h2>Parallax</h2>
                        <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
                        </div>
   
                    <div className="section white">
                        <div className="row container caption center-align">
                        <h2>Parallax</h2>
                        <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
                        </div>
                    </div>
                </div>
            </div>

            
            
    
    );
};

export default Parallax;