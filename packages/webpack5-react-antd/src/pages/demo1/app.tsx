import React from 'react';
import zhCN from 'antd/es/locale/zh_CN';
import Router from './components/router';
import ROUTES from './routes/index';
import { ConfigProvider } from 'antd';

export default function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <h1>Welcome</h1>
      <Router routes={ROUTES} />
    </ConfigProvider>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));