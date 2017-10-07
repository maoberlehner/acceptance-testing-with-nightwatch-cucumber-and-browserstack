const nightwatchCucumber = require('nightwatch-cucumber');
const chromedriverPath = require('chromedriver').path;
const geckodriverPath = require('geckodriver').path;
const seleniumServerPath = require('selenium-server').path;

nightwatchCucumber({
  cucumberArgs: [
    '--require', 'test/features/step-definitions',
    'test/features',
  ],
});

module.exports = {
  output_folder: 'test/reports',
  custom_assertions_path: ['test/custom-assertions'],
  selenium: {
    start_process: true,
    server_path: seleniumServerPath,
    cli_args: {
      'webdriver.chrome.driver': chromedriverPath,
      'webdriver.gecko.driver': geckodriverPath,
    },
  },
  test_settings: {
    default: {
      globals: {
        url: 'http://localhost:1337',
      },
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
      },
    },
  },
};
