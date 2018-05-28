import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {hot} from 'react-hot-loader';
import {Provider} from 'mobx-react';
import {ipcRenderer} from 'electron';
import {HashRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import ControlPanel from './ControlPanel';
import WaitForConnection from './WaitForConnection';
import DeviceSelection from './DeviceSelection';
import Store from '../stores';
import { injectGlobal } from 'styled-components';
import { CLIENT_RENEG_WINDOW } from 'tls';

injectGlobal`
    body {
        font-family: "Avenir Next", Helvetica, Arial, "Lantinghei SC", "Microsoft YaHei", sans-serif;
        height: 720px;
        width: 450px;
        overflow: hidden;
        background-color: #eeeeee;
        padding: 0;
        margin: 0;
    }

    ul,
    li {
        list-style: none;
        margin: 0;
        padding: 0;
    }
`;

export const store = new Store();

window.store = store;

class App extends Component {
    componentDidMount() {
        const router = this.refs.router;

        ipcRenderer.on('disconnected', (event, args) => {
            console.log('disconnected');
            router.history.push('idle');
        });

        ipcRenderer.on('connected', (event, args) => {
            console.log('connected', args);
            store.device.setDevice(args);
            router.history.push('main');
        });

        ipcRenderer.send('inited');
    }

    render() {
        return (
            <Provider store={store}>
                <Router ref="router">
                    <Switch>
                        <Redirect exact from='/' to='/idle' />
                        <Route path="/idle" exact component={WaitForConnection} />
                        <Route path="/main" component={ControlPanel} />
                        <Route path="/device" component={DeviceSelection} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default hot(module)(App);