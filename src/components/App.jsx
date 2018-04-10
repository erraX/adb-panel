import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import ControlPanel from './ControlPanel';
import WaitForConnection from './WaitForConnection';

import './App.less';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Redirect exact from='/' to='/idle' />
                    <Route path="/idle" exact component={WaitForConnection} />
                    <Route path="/main" component={ControlPanel} />
                </Switch>
            </Router>
        );
    }
}

export default hot(module)(App);
