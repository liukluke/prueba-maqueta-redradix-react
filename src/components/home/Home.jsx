import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import Section from '../section/Section';
import Footer from '../footer/Footer';

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <Navbar />
                <Section />
                <Footer />
            </div>
        )
    }
}
