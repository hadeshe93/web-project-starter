const path = require('path');
const assert = require('assert');
const minimist = require('minimist');
const { default: BuilderCore, formatBuilderConfig } = require('@hadeshe93/builder-core');
const BuilderWebpack = require('@hadeshe93/builder-webpack');

function parseArgv(argv) {
  const {_, mode = 'development'} = argv;
  const [pageName] = _;
  assert.ok(pageName, 'Please indicate page name');
  return {
    pageName,
    mode,
  };
}

async function start(pageName, mode = 'development') {
  const projectPath = path.resolve(__dirname, '../');
  const pagePath = path.resolve(projectPath, `src/pages/${pageName}`);
  const projectConfigPath = path.resolve(pagePath, './project.config.js');
  const appProjectConfig = {
    pageName,
    projectPath,
    ...require(projectConfigPath),
  };
  const builderConfig = formatBuilderConfig({
    mode,
    builderName: 'webpack',
    appProjectConfig,
  });
  const builder = new BuilderCore({});
  const webpackBuilder = new BuilderWebpack();
  builder.registerBuilder('webpack', webpackBuilder);
  const excutor = builder.createExcutor([builderConfig]);
  await excutor();
}

async function run() {
  const argv = minimist(process.argv.slice(2));
  const params = parseArgv(argv);
  await start(params.pageName, params.mode);
}

run();