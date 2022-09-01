import React from 'react';
import ReactDOM from 'react-dom';
import { enableES5 } from 'immer';
import App from './app';
import './styles/style.scss';

const NEED_SUPPORT_OLD_VER_BROWSER = true;
if (NEED_SUPPORT_OLD_VER_BROWSER) {
  enableES5();
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));