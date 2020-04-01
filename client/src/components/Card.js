import React, {useState, UseEffect, useEffect} from 'react';
import M from 'materialize-css';
import { Card, Icon, CardTitle, Row, Col } from 'react-materialize';
import img from "./assets/team-1.jpg";

const Item = () => {
    {// useEffect(()=> {
        // let elements = document.querySelectorAll(".parallax");
        // M.Parallax.init(elements);
        // }, []);
    }
    return(
        <Row>
  <Col
    m={6}
    s={12}
  >
    <Card
      actions={[
        <a key="1" href="#">This is a link</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" />}
      horizontal
      revealIcon={<Icon>more_vert</Icon>}
    >
      Here is the standard card with a horizontal image.
    </Card>
  </Col>
</Row>

            
            
    
    );
};

export default Item;