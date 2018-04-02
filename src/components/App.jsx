import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import createEventEmitter from '../utils/eventEmitter';
import ControlPanel from './ControlPanel';
import WaitForConnection from './WaitForConnection';

import './App.less';

export class App extends Component {
    static childContextTypes = {
        $events: PropTypes.object
    }

    state = {
        connected: true
    }

    getChildContext() {
        return {
            $events: createEventEmitter()
        };
    }

    componentDidMount() {
        this.$events.on('connected', () => {
            this.setState({connected: true});
        });

        this.$events.on('disconnected', () => {
            this.setState({connected: false});
        });
    }

    render() {
        const {connected} = this.state;

        return (
            <Router>
                <Router path="/idle" component={WaitForConnection}></Router>
                <Router path="/main" component={ControlPanel}></Router>
            </Router>
        );
    }
}

export default hot(module)(App);