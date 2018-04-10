import React, {Component} from 'react';
import Header from './Header';
import {$events} from '../utils/eventEmitter';

export default class ControlPanel extends Component {
    componentDidMount() {
        const {history} = this.props;

        $events.on('connected', () => {
            history.push('/main');
        });
    }

    render() {
        return (
            <div>Control panel</div>
        );
    }
}
