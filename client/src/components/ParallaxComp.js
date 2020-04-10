import React from 'react';
import { Parallax } from 'react-materialize';
import img from "./assets/Section_background_1.jpg";

const ParallaxComp = () => {

    return(
        <div>
            <div className="parallax-container">
                <Parallax
                    image={<img alt="" src={img}/>}
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