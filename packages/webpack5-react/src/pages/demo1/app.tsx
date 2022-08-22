import React from 'react';
import Router from './components/router';
import MyHeader from './components/header';
import ROUTES from './routes/index';

export default function App() {
  return (
    <div className="myapp">
      <h1>Welcome</h1>
      <MyHeader className="myheader" />
      <Router routes={ROUTES} />
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));