import React, {useState, UseEffect, useEffect} from 'react';
import M from 'materialize-css';
import { Card, Icon, CardTitle, Col } from 'react-materialize';
import img from "./assets/team-1.jpg";


const Item = () => {
    
    return(
    
 
    <Card
      actions={[
        <a key="1" href="#">This is a link</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" />}
      horizontal
      revealIcon={<Icon>more_vert</Icon>}
    >
        <h4>Item name</h4>
    
    </Card>
 


            
            
    
    );
};

export default Item;