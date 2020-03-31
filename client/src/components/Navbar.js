import React, { Component } from 'react'
import login, { Login } from './loginModal'

export class Navbar extends Component {
    componentDidMount(){}

    render() {
        return (
            <div>
            <nav>
                <div className="nav-wrapper black">
                    <div className="container">
                    <a href="#!" className="brand-logo">HotDropz</a>
                    <ul className="right hide-on-med-and-down">
                        <li><Login/></li>
                       
                        <li><a className="waves-effect waves-light modal-trigger btn">Register</a></li>

                       
                    </ul>
                    </div>
            </div>
            </nav>

            </div>
        )
    }
}

export default Navbar

