import React, { useState } from 'react';
import { Row, Col, Card, CardTitle, Icon } from 'react-materialize';
import Item from '../components/Card'




function ShoeBoard() {
    const [state, setState] = useState({
        array: [0, 1, 0, 1, 0, 1]
    })
    return (
        <div className="container">
           
            <Row>

                {state.array.map(item => (
                    <Col
                        s={12}
                        m={6}><Item /></Col>))}
            </Row>

        </div>
    )
};

export default ShoeBoard;

