import React, { Component } from 'react';
import WeatherService from '../../../services/weather';
import './new-city-input.css';
import * as _ from 'lodash';

class NewCityInput extends Component {
    constructor() {
        super();
        this.state = {
            completion: [{name: 'Paris', code: 623}],
        };
    }

    autoComplete = _.debounce(input => {
        if (input.length > 2) {
            WeatherService.searchCity(input)
                .then(data => {
                    console.log('data', data);
                    this.state.completion = data;
                    this.setState(this.state)
                })
                .catch(error => console.warn(error));
        }
    }, 1000);

    addCity(city) {
        this.props.onCitySelect(city);
        this.setState({completion: []});
    }

    render() {
        return (
            <div className="new-city-input">
                <input
                    type="text"
                    onFocus={e => e.target.value = ''}
                    onChange={e => this.autoComplete(e.target.value)}/>
                <div className="auto-complete">
                    {
                        this.state.completion.map((city, i) =>
                            <div key={i} onClick={() => this.addCity(city)}>{city.name}</div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default NewCityInput;
