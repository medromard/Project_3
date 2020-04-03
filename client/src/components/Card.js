import React, {useState, UseEffect, useEffect} from 'react';
import M from 'materialize-css';
import { Card, Icon, CardTitle, Col } from 'react-materialize';


const Item = (props) => {
    
    return(
    
 
    <Card
      actions={[
        <a target= "_blank" key="1" href={props.link}>Link to Article</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" />}
      horizontal
      revealIcon={<Icon>more_vert</Icon>}
    >
        <h4>{props.title}</h4>
        <h5>{props.author}</h5>
    
    </Card>
 


            
            
    
    );
};

export default Item;