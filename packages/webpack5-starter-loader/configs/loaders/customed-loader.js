// normal loader
const { getOptions } = require('loader-utils');

const cutomedLoader = function(content, sourceMap, meta) {
  const options = getOptions(this);
  console.log(options);
  return content;
};

// pitching loader
cutomedLoader.pitch = function(remainingRequest, precedingRequest, data) {
  const options = getOptions(this);
  console.log(options);
  console.log(arguments);
};

module.exports = cutomedLoader;
