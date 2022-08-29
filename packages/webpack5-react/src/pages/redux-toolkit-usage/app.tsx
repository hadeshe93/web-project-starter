import React from 'react';
import { Provider } from 'react-redux';
import Router from './components/router';
import ROUTES from './routes/index';
import { store } from './store/index';

export default function App() {
  return (
    <Provider store={store}>
      <div className="myapp">
        <Router routes={ROUTES} />
      </div>
    </Provider>
  );
}
