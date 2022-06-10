const MarkdownIt = require('markdown-it');
const { getOptions } = require('loader-utils');

module.exports = function(content, souceMap, meta) {
  const options = getOptions(this);
  const mdIt = MarkdownIt({
    html: true,
    ...(options || {}),
  });
  const html = mdIt.render(content);
  return `module.exports=${JSON.stringify(highlightZone(html))}`;
};

function highlightZone(html) {
  const ZONE_TYPES = [
    'success',
    'warning',
    'error',
  ];
  const getRegExp = (zoneType, matchAll = false) => {
    if (matchAll) return new RegExp(`:::${zoneType}([\\s\\S]*?):::`, 'g');
    return new RegExp(`:::${zoneType}([\\s\\S]*?):::`);
  };
  const result = ZONE_TYPES.reduce((str, zoneType, index) => {
    const reg = getRegExp(zoneType, true);
    str = str.replace(reg, (partial) => {
      const reg = getRegExp(zoneType);
      const matchedList = partial.match(reg);
      if (!matchedList) return partial;
      const innerContent = matchedList[1];
      return `<div class="highlight-zone ${zoneType}">${innerContent}</div>`;
    });
    return str;
  }, html);
  return result;
}
