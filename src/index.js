// import React from 'react';
// import ReactDOM from 'react-dom';
import {random} from './utils';
// import Header from './components/Header';

// ReactDOM.render(
//     <Header />,
//     document.getElementById('main')
// );

function exec(fn) {
     fn();
};
// exec(function () {
//     throw new Error('Error line 15');
// });

const str = 'asdfasdf';

function getStr() {
    random();
    return str;
}

debugger;
let str2 = getStr();
str2 + 'halo'; getStr();
