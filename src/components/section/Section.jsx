import React, { Component } from 'react'
import Card from './Card';

export default class Section extends Component {
    render() {
        return (
            <div className="section">
                <Card name="A" />
                <Card name="B" />
                <Card name="C" />
                <Card name="D" />
                <Card name="E" />
                <Card name="F" />
            </div>
        )
    }
}
