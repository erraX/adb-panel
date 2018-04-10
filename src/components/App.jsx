import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {hot} from 'react-hot-loader';
import {ipcRenderer} from 'electron';
import {HashRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import ControlPanel from './ControlPanel';
import WaitForConnection from './WaitForConnection';

import './App.less';

class App extends Component {
    componentDidMount() {
        ipcRenderer.on('disconnected', (event, arg) => {
            console.log('disconnected');
            location.href = '#/idle';
        });

        ipcRenderer.on('connected', (event, arg) => {
            console.log('connected');
            location.href = '#/main';
        });

        ipcRenderer.send('inited');
    }

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