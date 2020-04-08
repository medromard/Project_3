import React from 'react';
import { Card, Icon, CardTitle, } from 'react-materialize';


const Item = (props) => { 
    return(
    <Card
      actions={[
        <a target= "_blank" rel="noopener noreferrer" key="1" href={props.link}>Link to Article</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={props.image} />}
      horizontal
      revealIcon={<Icon>more_vert</Icon>}
    >
        <h4>{props.title}</h4>
        <h5>{props.pubDate}</h5>
    </Card>
    );
};

export default Item;