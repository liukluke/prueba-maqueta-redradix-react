import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import Section from '../section/Section';
import Footer from '../footer/Footer';

export default class Home extends Component {
    render() {
        return (
            <div className={`home ${(this.props.active ? 'home-trans' : null)}`}>
                <Navbar active={this.props.active} mobileMenu={() => this.props.mobileMenu()} />
                <Section />
                <Footer />
            </div>
        )
    }
}
