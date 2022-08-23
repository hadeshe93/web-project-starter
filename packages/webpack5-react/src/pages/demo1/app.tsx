import React from 'react';
import Router from './components/router';
import MyHeader from './components/header/index';
import ROUTES from './routes/index';

export default function App() {
  return (
    <div className="myapp">
      <h1>Welcome</h1>
      <MyHeader />
      <Router routes={ROUTES} />
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));