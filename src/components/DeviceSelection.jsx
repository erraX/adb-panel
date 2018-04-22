import React from 'react';

export const Device = ({name, icon}) => (
    <li>
        <span clasName="DeviceSelection__device-name">{name}</span>
        <img className="DeviceSelection__device-icon" src={icon} />
    </li>
);

export default class DeviceSelection {
    render() {
        const {devices} = this.props;

        return (
            <div className="DeviceSelection">
                <h1>请连接手机设备</h1>
                <ul className="DeviceSelection__device-list">
                    {devices.map(props => <Device {...props} />)}
                </ul>
            </div>
        );
    }
}