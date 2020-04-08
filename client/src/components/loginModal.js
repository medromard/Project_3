import React, { Component } from 'react';
import { Modal, Button} from 'react-materialize';
import { Link } from "react-router-dom";


export class Login extends Component {
    componentDidMount(){
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
          });
    }
    submitLogin(){
        console.log("Success!!!") 
        
    }

    render() {
        return (
            <div>
           
           <Modal
  actions={[
    <Button flat modal="close" node="button" waves="green" onClick={() => {this.submitLogin();}}><Link to = "/user">Login</Link></Button>,
    <Button flat modal="close" node="button" waves="green" >Close</Button>
    
  ]}
  bottomSheet={false}
  fixedFooter={false}
  header="Login"
  id="Modal-0"
  open={false}
  options={{
    dismissible: true,
    endingTop: '10%',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    opacity: 0.5,
    outDuration: 250,
    preventScrolling: true,
    startingTop: '4%'
  }}
  trigger={<Button node="button" className = "ice">Login</Button>}
>
<div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <textarea id="textarea1" className="materialize-textarea"></textarea>
          <label for="textarea1">Username</label>
        </div>
        <div className="input-field col s12">
          <textarea id="textarea1" className="materialize-textarea"></textarea>
          <label for="textarea1">Password</label>
        </div>
      </div>
    </form>
  </div>
  
</Modal>

            </div>
        )
    }
}

export default Login

