import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1668907708821_2538';

  // add your egg config in here
  config.middleware = ['errorHandler'];
  config.errorHandler = { match: '/api' };
  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'jiicm@1024',
      database: 'jiicm',
    },
    app: true,
    agent: false,
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // mysql config


  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
