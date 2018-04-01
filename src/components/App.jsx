import React, {Component} from 'react';
import ControlPanel from './ControlPanel';
import WaitForConnection from './WaitForConnection';
import {hot} from 'react-hot-loader';

import './App.less';

export class App extends Component {
    state = {
        connected: true
    }

    render() {
        const {connected} = this.state;

        return (
            <div>
                {connected ? <ControlPanel /> : <WaitForConnection />}
            </div>
        );
    }
}

export default hot(module)(App);