import React, {Component} from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react'
import mobileIcon from '../assets/mobile.svg';

const DeviceInfoContainer = styled.div`
    background-color: #FFF;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`;

const DeviceInfoList = styled.ul`
    display: inline-block;
    vertical-align: top;
    padding: 10px;
`;

const DeviceInfoItem = styled.li`
    margin-right: 10px;
    margin-bottom: 10px;
`;

const DescTitle = styled.span`
    display: inline-block;
    width: 80px;
`;

const MobileIcon = styled.img`
    width: 120px;
`;

const DescValue = styled.span``;

const DeviceInfo = ({name, id, device}) => (
    <DeviceInfoContainer>
        <MobileIcon src={mobileIcon} />
        <DeviceInfoList>
            <DeviceInfoItem>
                <DescTitle>手机型号:</DescTitle>
                <DescValue>{name}</DescValue>
            </DeviceInfoItem>
            <DeviceInfoItem>
                <DescTitle>设备ID:</DescTitle>
                <DescValue>{id}</DescValue>
            </DeviceInfoItem>
            <DeviceInfoItem>
                <DescTitle>连接状态:</DescTitle>
                <DescValue>已连接</DescValue>
            </DeviceInfoItem>
        </DeviceInfoList>
    </DeviceInfoContainer>
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