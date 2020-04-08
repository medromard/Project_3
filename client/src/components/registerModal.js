import React, { Component } from 'react';
import { Modal, Button, } from 'react-materialize';

export class Register extends Component {
    componentDidMount(){
        // const M = window.M;
        // document.addEventListener('DOMContentLoaded', function() {
        //     var elems = document.querySelectorAll('.modal');
            
        //   });
    }
    submitLogin(){
        console.log("Success!!!") 
        
    }

    render() {
        return (
            <div>
           
           <Modal
  actions={[
    <Button flat modal="close" node="button" waves="green" onClick={() => {this.submitLogin();}}>Submit</Button>,
    <Button flat modal="close" node="button" waves="green" >Close</Button>
    
  ]}
  bottomSheet={false}
  fixedFooter={false}
  header="Sign up Today"
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
  trigger={<Button node="button" className = "ice">Register</Button>}
>
<div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Email</label>
        </div>
        <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Username</label>
        </div>
        <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
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

export default Register

