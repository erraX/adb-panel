import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import styled from 'styled-components';
import plugIcon from '../assets/plug.svg';

const Title = styled.h1`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-weight: 200;
    color: #a2a2a2;
`;

const PlugIcon = styled.img`
    position: absolute;
    left: 50%;
    top: 46%;
`;

@inject('store')
@observer
export default class WaitForConnection extends Component {
    componentDidMount() {
        console.log(this);
    }

    render() {
        return (
            <div>
                <PlugIcon src={plugIcon} />
                <Title>请连接Android手机</Title>
            </div>
        );
    }
}