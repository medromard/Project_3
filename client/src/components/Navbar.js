import React, { Component } from 'react'
import login, { Login } from './loginModal'
import register, { Register } from './registerModal'

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

