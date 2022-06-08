// normal loader
const cutomedLoader = function(content, sourceMap, meta) {
  return content;
};

// pitching loader
cutomedLoader.pitch = function(remainingRequest, precedingRequest, data) {
  console.log(arguments);
};

module.exports = cutomedLoader;
