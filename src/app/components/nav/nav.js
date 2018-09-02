import React, { Component } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div>
                <ul className="nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/weather">Weather</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <hr/>
            </div>
        );
    }
}

export default Nav;
