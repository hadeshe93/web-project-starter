const ATTRIBUTE_NAME = 'data-inject';
const URL = 'http://localhost:${PLACEHOLDER_PORT}/api/launchEditor?line=${PLACEHOLDER_LINE}&column=${PLACEHOLDER_COLUMN}&file=${PLACEHOLDER_FILE}';

function traceSourceCode(targetNode) {
  const info = JSON.parse(targetNode.getAttribute(ATTRIBUTE_NAME));
  const { line, column, filePath } = info;
  const url = URL.replace('${PLACEHOLDER_LINE}', line)
    .replace('${PLACEHOLDER_COLUMN}', column)
    .replace('${PLACEHOLDER_FILE}', encodeURIComponent(filePath));
  return fetch(url);
}


window.addEventListener('click', async (e) => {
  const { path: nodePath } = e;
  const targetNode = nodePath.find(nodeItem => nodeItem.hasAttribute(ATTRIBUTE_NAME));
  if (!targetNode) return;

  e.stopPropagation();
  e.preventDefault();
  const res = await traceSourceCode(targetNode);
  console.log('[traceSourceCode] res:', res);
});