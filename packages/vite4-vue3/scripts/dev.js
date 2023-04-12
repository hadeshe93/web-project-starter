
const path = require('path');
const ViteBuilder = require('@hadeshe93/builder-vite').default;
const minimist = require('minimist');
const debug = require('debug')('app|scripts');

function main(args) {
  debug('args: %O', args);
  const { pageName = '' } = args;
  const projectPath = path.resolve(__dirname, '..');
  const projectConfigPath = path.resolve(projectPath, 'src', 'pages', pageName, 'project.config.js');
  const builder = new ViteBuilder();
  const builderConfig = {
    mode: process.env.NODE_ENV || 'development',
    builderName: 'vite',
    projectPath,
    pageName,
    projectConfig: require(projectConfigPath),
  };
  debug('builderConfig: %O', builderConfig);
  builder.start(builderConfig);
}

const args = minimist(process.argv.slice(2));
main(args);