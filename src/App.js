import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

import './global.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
            </Router>
        </div>
    );
}

export default App;