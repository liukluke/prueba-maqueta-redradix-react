import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-hamburger">
                    <button type="button" onClick={() => this.props.mobileMenu()}>
                        <i className={`fas ${(this.props.active? 'fa-times' : 'fa-bars')}`} >
                        </i></button>
                </div>
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