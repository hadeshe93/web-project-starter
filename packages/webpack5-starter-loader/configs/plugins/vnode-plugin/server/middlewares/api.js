const { debug } = require('../utils/debug');

async function launchEditor(req, res, next) {
  const { file, line, column } = req.query;
  if (!file || !line || !column) {
    debug('参数缺失，跳转编辑器失败');
    res.json({
      code: -1,
    });
    return;
  }
  res.json({
    code: 0,
  });
  // TODO
}

module.exports = async (req, res, next) => {
  const { command } = req.params;
  debug(`command: ${command}`);

  if (command === 'launchEditor') {
    await launchEditor(req, res, next);
  } else {
    res.status(404).json({
      code: -1,
      message: '没有对应的 api'
    })
  }
};
