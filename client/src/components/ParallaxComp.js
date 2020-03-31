import React, {useState, UseEffect, useEffect} from 'react';
import M from 'materialize-css';
import { Parallax } from 'react-materialize';

const ParallaxComp = () => {
    {// useEffect(()=> {
        // let elements = document.querySelectorAll(".parallax");
        // M.Parallax.init(elements);
        // }, []);
    }
    return(
        <div>
            <div className="parallax-container">
                <Parallax
                    image={<img alt="" src="client/src/components/Section_background_1.jpg"/>}
                    options={{
                    responsiveThreshold: 0
                    }}
                />

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

export default ParallaxComp;