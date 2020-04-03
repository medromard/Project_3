import React , {useState}  from 'react';
import { Row, Col, Card, CardTitle, Icon} from 'react-materialize';
import Item from '../components/Card'




function User () {
     const [state, setState] = useState ({
        array:[0,1,0,1,0,1]
     })
    return (
        <div className = "container">
        <Row>
  <Col
    m={12}
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
<Row>

{state.array.map(item => (                
<Col
s={12}
m={6}><Item/></Col>))}
</Row>
        
        </div>
    )
};

export default User;

