import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-materialize';
import Item from '../components/Card';
import API from '../utils/API';


function ShoeBoard() {
    const [state, setState] = useState({
        array: []
    })

    useEffect(() => {
        // code to run on component mount
        API.getShoes().then(results =>
            {
                setState({
                    array: results.data.items
                })
            })
      }, [])

    return (
        <div className="container">
            {}
            <Row>
                {state.array.map(item => (
                    <Col
                    
                        key = {item.link} 
                    
                        s={12}
                        m={4}>
                         {/* {JSON.stringify(item)} */}
                            <Item 
                                title={item.title}
                                pubDate={item.pubDate}
                                link={item.link}
                                image={item.image}
                            />
                    </Col>))}
            </Row>

        </div>
    )
};

export default ShoeBoard;

