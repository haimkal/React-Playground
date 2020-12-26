import React, { Component } from 'react'
import MenuItem from './MenuItem/MenuItem'
import './Menu.css'

export default class Menu extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <MenuItem>
                    {this.props.children}         
                    </MenuItem>
                </ul>

            </nav>
        );
    }
}
