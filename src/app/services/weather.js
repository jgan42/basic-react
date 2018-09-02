import axios from 'axios';

const api = {
    endPoint: 'http://dataservice.accuweather.com/',
    autoComplete: 'locations/v1/cities/autocomplete',
    forecast: 'forecasts/v1/daily/1day/',
    key: 'GCv2160FdQea0WUuYnvrKUZz2uvFKra0',
    key2: 'kCGrRnaVCn6rTUgGeoc6NbWKeTmPXMAr',
};

class WeatherService {

    getWeather(cityCode, fallbackKey = false) {
        const key = fallbackKey ? api.key2 : api.key;

        return axios.get(`${api.endPoint + api.forecast + cityCode}?apikey=${key}&metric=true`)
            .then(res => {
                if (res.status !== 200) {
                    return Promise.reject('Location not found');
                }
                return this.formatWeatherData(res.data.DailyForecasts[0]);
            })
            .catch(error => this.getWeather(cityCode, true))
            .catch(error => ({
                icon: `https://developer.accuweather.com/sites/default/files/31-s.png`,
                text: 'expired key..',
                temp: `XX / XX °C`,
            }));
    }

    searchCity(input, fallbackKey = false) {
        const key = fallbackKey ? api.key2 : api.key;

        return axios.get(`${api.endPoint + api.autoComplete}?apikey=${key}&q=${input}`)
            .then(res => {
                if (res.status !== 200) {
                    return Promise.reject('No location found');
                }
                return res.data.map(city => ({
                    name: city.LocalizedName,
                    code: city.Key
                })).slice(0, 10);
            })
            .catch(error => this.searchCity(input, true))
    }

    formatWeatherData(data) {
        const iconCode = data.Day.Icon < 10 ? '0' + data.Day.Icon : data.Day.Icon;

        return {
            icon: `https://developer.accuweather.com/sites/default/files/${iconCode}-s.png`,
            text: data.Day.IconPhrase,
            temp: `${data.Temperature.Minimum.Value} / ${data.Temperature.Maximum.Value} °C`,
        }
    }
}

export default new WeatherService();