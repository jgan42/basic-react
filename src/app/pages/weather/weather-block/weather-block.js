import React, { Component } from 'react';
import WeatherService from '../../../services/weather';
import './weather-block.css';

class WeatherBlock extends Component {
    constructor() {
        super();
        this.state = {
            icon: `https://developer.accuweather.com/sites/default/files/30-s.png`,
            text: 'Loading...',
            temp: `?? / ?? °C`
        };
    }

    componentDidMount() {
        WeatherService.getWeather(this.props.city.code)
            .then(data => this.setState(data))
            .catch(error => console.warn(error));
    }

    removeCity = () => {
        this.props.onRemove(this.props.city.code);
    };

    render() {
        return (
            <div className="weather-block">
                <div className="weather-text">{this.props.city.name}</div>
                <div className="icon">
                    <img src={this.state.icon} alt={this.state.text}/>
                    <div>{this.state.text}</div>
                </div>
                <div className="weather-text">{this.state.temp}</div>
                <div className="delete-btn" onClick={this.removeCity}> X</div>
            </div>
        );
    }
}

export default WeatherBlock;
