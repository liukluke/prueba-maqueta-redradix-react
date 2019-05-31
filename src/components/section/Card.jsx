import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="section-card">
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}
