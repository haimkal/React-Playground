import React, { Component } from 'react'
import './MenuItem.css'
export default class MenuItem extends Component {
    render() {
        return (
            <li className="href">
                <a href={this.props.route}>
                    {this.props.children}
                </a>
            </li>
        )
    }
}
