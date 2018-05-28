import React, {Component} from 'react';
import styled from 'styled-components';

const ShortCutsContainer = styled.ul`
    width: 500px;
`;

const ShortCut = styled.li`
    display: inline-block;
    width: 50px;
    height: 50px;
`;

export default class ShortCuts extends Component {
    handleClickAppManager() {
        console.log('open app manager');
    }

    render() {
        return (
            <ShortCutsContainer>
                <ShortCut onClick={this.handleClickAppManager}>
                    应用管理
                </ShortCut>
            </ShortCutsContainer>
        )
    }
}