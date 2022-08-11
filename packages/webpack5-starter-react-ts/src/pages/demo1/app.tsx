import React from 'react';
import Router from './components/router';
import ROUTES from './routes/index';

export default function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <Router routes={ROUTES} />
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));