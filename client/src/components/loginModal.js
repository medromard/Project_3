import React, { Component } from 'react'

export class Login extends Component {
    componentDidMount(){
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
          });
    }

    render() {
        return (
            <div>
           
                <a className="waves-effect waves-light btn modal-trigger red darken-3" href="#modal1">Login</a>
                <div id="modal1" class="modal">
                    <div className="modal-content">
                        <h4>Modal Header</h4>
                        <p className="fs-18 font-black">A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                         <a href="#!" class="modal-close waves-effect waves-green btn-flat">Login</a>
                    </div>
                 </div>

            </div>
        )
    }
}

export default Login

