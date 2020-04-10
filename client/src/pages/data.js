import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-materialize';
import Item from '../components/Card';

import API from '../utils/API';


function User() {
    const [state, setState] = useState({
        array: [0, 1]
    })

    useEffect(() => {
        // code to run on component mount
        API.getShoes().then(results => {
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
                        s={12}
                        m={6}>
                        {/* {JSON.stringify(item)} */}
                        <Item
                            title={item.title}
                            pubDate={item.pubDate}
                            link={item.link}
                        />
                    </Col>))}
            </Row>
        </div>
    )
};

export default User;

