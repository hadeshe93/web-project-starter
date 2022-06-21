const { parse: parseVue } = require('@vue/compiler-sfc');
const { getOptions } = require('loader-utils');

const AST_TYPE_MAP = {
  TAG: 1,
  TEXT: 2,
  TAG_ATTR: 6,
};

const INJECT_NAME_MAP = {
  LINE: 'line',
  COLUMN: 'column',
  FILE_PATH: 'filePath',
  TAG_NAME: 'tagName',
};

module.exports = function(content, souceMap, meta) {
  const options = getOptions(this);
  let params = new URLSearchParams(this.resource);
  if (params.get('type') !== 'template') return content;
  // 当前文件的绝对路径
  const filePath = this.resourcePath;
  const parsedContent = parseVue(content);
  // template开始的 DOM AST 结构
  const ast = parsedContent.descriptor.template.ast;
  // template部分的原字符串
  const sourceStr = ast.loc.source;
  const newSourceStr = getInjectContent(ast, sourceStr, filePath);
  const newContent = content.replace(sourceStr, newSourceStr);
  return newContent;
};

function getInjectContent(ast, sourceStr, filePath) {
  // 非标签节点，直接返回
  if (ast.type !== AST_TYPE_MAP.TAG) return sourceStr;

  if (ast.children && ast.children.length > 0) {
    const list = ast.children.reverse();
    sourceStr = list.reduce((lastSourceStr, childAst) => {
      lastSourceStr = getInjectContent(childAst, lastSourceStr, filePath);
      return lastSourceStr;
    }, sourceStr);
  }

  const codeLines = sourceStr.split('\n');
  const { line: startLine, column: startColumn } = ast.loc.start;
  // 要注入信息的列：标签名后空一格
  const columnToInject = startColumn + ast.tag.length;
  // 要注入信息的行内容
  const targetLine = codeLines[startLine - 1];
  const { tag: tagName } = ast;
  const infoToInject = {
    [INJECT_NAME_MAP.LINE]: startLine,
    [INJECT_NAME_MAP.COLUMN]: startColumn,
    [INJECT_NAME_MAP.FILE_PATH]: filePath,
    [INJECT_NAME_MAP.TAG_NAME]: tagName,
  };
  const targetLineNew = `${targetLine.slice(0, columnToInject)} data-inject='${JSON.stringify(infoToInject)}' ${targetLine.slice(columnToInject)}`;
  codeLines.splice(startLine - 1, 1, targetLineNew);
  return codeLines.join('\n');
}
