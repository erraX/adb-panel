import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import './WaitForConnection.less';

@inject('store')
@observer
export default class WaitForConnection extends Component {
    componentDidMount() {
        console.log(this);
    }

    render() {
        return (
            <div className="WaitForConnection">
                <h1>请连接Android手机</h1>
            </div>
        );
    }
}