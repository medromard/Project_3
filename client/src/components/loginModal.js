import React, { Component, useState } from 'react';
import { Modal, Button} from 'react-materialize';
import { Link } from "react-router-dom";
import API from '../utils/API';


export class Login extends Component {
    componentDidMount(){
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            // var instances = M.Modal.init(elems, {});
          });
    }
    submitLogin(event){
      event.preventDefault();
      API.signIn(this.state.password, this.state.email)
      .then((res) => {
        console.log(res.data)
      })
        console.log("Success!!!") 

        
        
    }

    handleInput (event) {
      console.log(event)
      event.preventDefault();
      const key = event.target.name;
      
      const value = event.target.value;
      console.log(value);
      this.state[key]=value;
      console.log(this.state)
      //this.setState( (state, event) => ({[event.target.name]: event.target.value }))
      // this.setState(  {email: event.target.value })
      // console.log(this.state + event.target.name + event.target.value)
     
    }

    render() {
        return (
            <div>
           
           <Modal
  actions={[
    <Button flat modal="close" node="button" waves="green" onClick={(e) => {this.submitLogin(e);}}>Login</Button>,
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
          <label htmlFor="textarea1">Username</label>
        </div>
        <div className="input-field col s12">
          <textarea id="textarea1" className="materialize-textarea"></textarea>
          <label htmlFor="textarea1">Password</label>
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

