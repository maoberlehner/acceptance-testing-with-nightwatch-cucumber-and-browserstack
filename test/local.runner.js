#!/usr/bin/env node

const Nightwatch = require('nightwatch');
const browserstack = require('browserstack-local');

try {
  // Code to start browserstack local before start of test.
  console.log('Connecting local'); // eslint-disable-line

  Nightwatch.bs_local = new browserstack.Local();
  Nightwatch.bs_local.start({ key: process.env.BROWSERSTACK_ACCESS_KEY }, (error) => {
    if (error) throw error;

    console.log('Connected. Now testing...'); // eslint-disable-line

    Nightwatch.cli((argv) => {
      Nightwatch.CliRunner(argv)
        .setup(null, () => {
          // Code to stop browserstack local after end of parallel test.
          Nightwatch.bs_local.stop(() => {});
        })
        .runTests(() => {
          // Code to stop browserstack local after end of single test.
          Nightwatch.bs_local.stop(() => {});
        });
    });
  });
} catch (error) {
  console.log('There was an error while starting the test runner:\n\n'); // eslint-disable-line

  process.stderr.write(`${error.stack}\n`);
  process.exit(2);
}
