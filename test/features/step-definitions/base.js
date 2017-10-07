const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');

const { url } = require('../../conf/default.conf').test_settings.default.globals;

const pages = {
  'home page': '',
};

const elements = {
  'newsletter input': '.qa-newsletter-input',
  'submit button': '.qa-newsletter-submit',
  'error message': '.qa-newsletter-error',
  'success message': '.qa-newsletter-success',
};

defineSupportCode(({ Given, Then }) => {
  Given(/^I open the `(.*?)`$/, pageName =>
    client
      .url(`${url}/${pages[pageName]}`));

  Then(/^I see.*? `(.*?)`.*?$/, elementName =>
    client.expect.element(elements[elementName]).to.be.visible);

  Then(/^I don't see.*? `(.*?)`.*?$/, elementName =>
    client.expect.element(elements[elementName]).to.not.be.visible);

  Then(/^I enter.*?\ "(.*?)" into `(.*?)`$/, (value, elementName) =>
    client.setValue(elements[elementName], value));

  Then(/^I click.*? `(.*?)`$/, (elementName) =>
    client.click(elements[elementName]));
});
