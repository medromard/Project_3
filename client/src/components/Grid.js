import React, { useState, useEffect, Component } from 'react';
import M from 'materialize-css';
import { Row, Col } from 'react-materialize';
import Item from './Card'


class Grid extends Component {
    state = {array:[0,1,0,1,0,1]
    }
    render(){
    return (
        <div className = "container">
            <div className = "row">
                <div className = "col s12 mt25">
                    <p className = "center-align fs-18" > Our application is designed for the user to see what the hottest deals are for a particular product. In our demo app, it will be designed for the avid shoe collector. This app will allow the user to create a profile, to be able to save and access the site, and search the type of shoe(s) that they are looking for. The site will then populate search results based on the best deals around the web or in the stores. Also this site will give you a notification on when the newest release of whatever product that they are looking for.</p>
                </div>
            </div>

            <h2 className = 'center'>Hottest Drops</h2>

            <Row>

                {this.state.array.map(item => (                
                <Col
                s={12}
                m={6}><Item/></Col>))}
            </Row>
        
            
        </div>
    );
};
}
export default Grid; 