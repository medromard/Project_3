import React, { Component } from 'react'
import { Login } from './loginModal'

import  { Register } from './registerModal'

import { Link } from "react-router-dom";

export class Navbar extends Component {
    componentDidMount(){}

    render() {
        return (
            <div>
            <nav>
                <div className="nav-wrapper black">
                    <div className="container">
                    <Link to="/Home" className="brand-logo">HotDropz</Link>
                    <ul className="right hide-on-med-and-down">
                        <li className="mr25"><Login/></li>
                        <span> </span>
                       
                        <li><Register/></li>

                       
                    </ul>
                    </div>
            </div>
            </nav>

            </div>
        )
    }
}

export default Navbar

