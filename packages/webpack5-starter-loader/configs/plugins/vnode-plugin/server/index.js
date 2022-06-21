const cors = require('cors');
const express = require('express');
const portfinder = require('portfinder');

const midApi = require('./middlewares/api');
const { debug } = require('../utils/debug');
const app = express();

app.use(cors());
app.options('*', (req, res, next) => {
  res.status(200);
});
app.use('/api/:command', midApi);

async function startServer(expressApp) {
  if (expressApp.locals.isRunning) return expressApp;
  try {
    const port = await portfinder.getPortPromise();
    await new Promise((resolve) => {
      expressApp.listen(port, resolve);
    });
    expressApp.locals.isRunning = true;
    expressApp.locals.port = port;
    debug(`服务器启动成功，正在监听 ${port} 端口`);
  } catch (err) {
    debug('启动服务器失败：', err);
  }
  return expressApp;
}

module.exports = {
  startServer: startServer.bind(null, app),
};