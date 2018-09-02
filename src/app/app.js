import React, { Component } from 'react';
import './app.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import Home from './pages/home/home';
import Weather from './pages/weather/weather';
import About from './pages/about/about';
import Header from './components/header/header';
import Nav from './components/nav/nav';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Router>
                    <div>
                        <Nav/>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/weather" component={Weather}/>
                            <Route exact path="/about" component={About}/>
                            <Redirect to="/"/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
