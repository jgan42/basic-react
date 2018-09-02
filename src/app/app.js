import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './app.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import Home from './pages/home/home';
import Weather from './pages/weather/weather';
import About from './pages/about/about';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">React testing</h1>
                </header>
                <Router>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/weather">Weather</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>

                        <hr/>

                        <Route exact path="/" component={Home}/>
                        <Route path="/weather" component={Weather}/>
                        <Route exact path="/about" component={About}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
