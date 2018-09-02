import React, { Component } from 'react';
import './weather.css';

class Weather extends Component {

    constructor() {
        super();
        console.log('debug');
    }
    
    render() {
        return (
            <div>
                Hello weather
            </div>
        );
    }
}

export default Weather;
