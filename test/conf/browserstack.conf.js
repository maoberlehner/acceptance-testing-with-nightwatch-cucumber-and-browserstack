const defaultConfig = require('./default.conf');

const browserstackConfig = {
  selenium: {
    start_process: false,
    host: 'hub-cloud.browserstack.com',
    port: 80,
  },
  test_settings: {
    default: {
      desiredCapabilities: {
        'browserstack.user': process.env.BROWSERSTACK_USERNAME,
        'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY,
        'browserstack.local': true,
      },
      globals: defaultConfig.test_settings.default.globals,
    },
    ie: {
      desiredCapabilities: {
        os: 'Windows',
        os_version: '8',
        browser: 'IE',
      },
    },
    edge: {
      desiredCapabilities: {
        os: 'Windows',
        os_version: '10',
        browser: 'edge',
      },
    },
    safari: {
      desiredCapabilities: {
        os: 'OS X',
        os_version: 'Sierra',
        browser: 'safari',
      },
    },
    firefox: {
      desiredCapabilities: {
        os: 'Windows',
        os_version: '10',
        browser: 'firefox',
      },
    },
    chrome: {
      desiredCapabilities: {
        os: 'Windows',
        os_version: '10',
        browser: 'chrome',
      },
    },
  },
};

const nightwatchConfig = Object.assign({}, defaultConfig, browserstackConfig);

Object.keys(nightwatchConfig.test_settings).forEach((key) => {
  const config = nightwatchConfig.test_settings[key];

  config.selenium_host = nightwatchConfig.selenium.host;
  config.selenium_port = nightwatchConfig.selenium.port;
  config.desiredCapabilities = Object.assign(
    {},
    nightwatchConfig.test_settings.default.desiredCapabilities,
    config.desiredCapabilities,
  );
});

module.exports = nightwatchConfig;
