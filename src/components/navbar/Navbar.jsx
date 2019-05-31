import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <i className="fas fa-bars"></i>
                <h3 className="navbar-title">LOGO</h3>
                <ul className="navbar-list">
                    <li>About</li>
                    <li>Clients</li>
                    <li>Works</li>
                    <li>Contact</li>
                </ul>
            </div>
        )
    }
}
