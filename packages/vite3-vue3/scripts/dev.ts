import { createServer, UserConfig } from 'vite';
import minimist from 'minimist';
import createViteConfig from './configs';

;(async () => {
  const args = minimist(process.argv.slice(2));
  // const process1 = process;
  // console.log(process1);
  // console.log(args);
  const pageName = args._[0];
  if (!pageName) {
    throw new Error('Please indicate project name');
  }

  const projectConfig = require(`../src/pages/${pageName}/project.config.ts`);
  const viteConfig = createViteConfig({
    pageName,
    projectConfig,
  });
  const server = await createServer({
    // 禁止自动搜寻查找项目根目录
    configFile: false,
    ...(viteConfig as UserConfig),
  })
  await server.listen();

  server.printUrls();
})()