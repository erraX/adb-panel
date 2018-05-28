import React, {Component} from 'react';
import styled from 'styled-components';

const Header = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
`;

export default class Header extends Component {
    render() {
        return (
            <Header>
                Header
            </Header>
        );
    }
}
