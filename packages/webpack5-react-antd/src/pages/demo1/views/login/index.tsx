import React from 'react';
import LoginForm from './components/form/index';

import './index.css';

export default () => {
  return (
    <div className="page-login">
      <div className="login-wrapper">
        <LoginForm />
      </div>
    </div>
  );
};
