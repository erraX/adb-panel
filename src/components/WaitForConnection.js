import React, {Component} from 'react';
import {$events} from '../utils/eventEmitter';
import './WaitForConnection.less';

export default class WaitForConnection extends Component {

    componentDidMount() {
        const {history} = this.props;

        $events.on('disconnected', () => {
            history.push('/idle');
        });
    }

    render() {
        return (
            <div className="WaitForConnection">
                <h1>请连接Android手机</h1>
            </div>
        );
    }
}
