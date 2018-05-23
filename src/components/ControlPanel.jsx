import React, {Component} from 'react';
import { observer, inject } from 'mobx-react'
import './ControlPanel.less';

const DeviceInfo = ({name, model, device}) => (
    <ul className="ControlPanel__deviceInfo">
        <li><span>Name:</span><span>{name}</span></li>
        <li><span>Model:</span><span>{model}</span></li>
        <li><span>Device:</span><span>{device}</span></li>
    </ul>
);

@inject('store')
@observer
export default class ControlPanel extends Component {
    render() {
        const {store} = this.props;

        return (
            <div className="ControlPanel">
                <DeviceInfo {...store.device} />
            </div>
        );
    }
}