import React, { Component } from 'react'

export default class MobileMenu extends Component {
    render() {
        return (
            <div className={`menu-mobile ${(this.props.active? 'active' : null)}`}>
                <div className="menu-mobile-box">
                    <h3>LOGO</h3>
                    <ul>
                        <li>About</li>
                        <li>Clients</li>
                        <li>Works</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        )
    }
}
