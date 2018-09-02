import React, { Component } from 'react';
import './header.css';
import logo from '../../../assets/logo.svg';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">React testing</h1>
            </header>
        );
    }
}

export default Header;
