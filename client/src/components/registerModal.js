import React, { Component } from 'react';
import { Modal, Button, TextInput} from 'react-materialize';
import API from '../utils/API';



export class Register extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: ''}
      
  };
    // componentDidMount(){
    //     const M = window.M;
    //     document.addEventListener('DOMContentLoaded', function() {
    //         var elems = document.querySelectorAll('.modal');
    //         // var instances = M.Modal.init(elems, {});
    //       });
    // }
    submitRegister(event){
      event.preventDefault();
      API.signUp(this.state.password, this.state.email, this.state.username)
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
    <Button flat modal="close" node="button" waves="green" onClick={(e) => {this.submitRegister(e)}}>Submit</Button>,
    <Button flat modal="close" node="button" waves="green" >Close</Button>
    
  ]}
  bottomSheet={false}
  fixedFooter={false}
  
  header="Sign up Today"
  id="Modal-0"
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
<div className="row">
    <form className="col s12">
      <div className="row">
        
          <TextInput s={12} label="Email" id="textarea1"  name="email" onChange={(e) => {this.handleInput(e)}}></TextInput>
       
        
          <TextInput s={12} label="Username"  id="textarea2"  name="username" onChange={(e) => {this.handleInput(e)}}></TextInput>
        
      
       
          <TextInput s={12} label="Password" id="textarea3"  name="password" type="password" onChange={(e) => {this.handleInput(e)}}></TextInput>
      </div>
    </form>
  </div>
  
</Modal>

            </div>
        )
    }
}

export default Register

