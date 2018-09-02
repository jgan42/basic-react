import React, { Component } from 'react';
import './home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <p>
                    Hi, this is simply a basic react-app !
                </p>
                <p>
                    Click on the
                    "<Link to="/weather">Weather</Link>"
                    link to see more !
                </p>
            </div>
        );
    }
}

export default Home;
