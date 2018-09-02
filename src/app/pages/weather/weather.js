import React, { Component } from 'react';
import WeatherBlock from './weather-block/weather-block';
import './weather.css';
import NewCityInput from './new-city-input/new-city-input';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityList: [{
                name: 'Paris',
                code: 623,
            }],
        }
    }

    addCity = (newCity) => {
        const i = this.state.cityList.findIndex(city => city.code === newCity.code);
        if (i === -1) {
            this.state.cityList.push(newCity);
            this.setState(this.state);
        }
    };

    removeCity = (cityCode) => {
        const i = this.state.cityList.findIndex(city => city.code === cityCode);
        if (i !== -1) {
            this.state.cityList.splice(i, 1);
            this.setState(this.state);
        }
    };

    render() {
        return (
            <div>
                Hello weather
                <NewCityInput onCitySelect={this.addCity}/>
                {
                    this.state.cityList.map(city => (
                        <WeatherBlock
                            key={city.code}
                            city={city}
                            onRemove={this.removeCity}/>
                    ))
                }
            </div>
        );
    }
}

export default Weather;
