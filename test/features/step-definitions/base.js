const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');

const { nestedSelector } = require('../../helpers/nested-selector');

const { url } = require('../../conf/default.conf').test_settings.default.globals;

const pages = {
  'home page': `${url}/`,
};

defineSupportCode(({ defineStep }) => {
  defineStep(/^I (?:browse|open|visit).*? `(.*?)`$/, pageName =>
    client.url(pages[pageName]));

  defineStep(/^I (?:find|identify|see|spot).*? (`.*`).*?$/, selectorChain =>
    client.expect.element(nestedSelector(selectorChain)).to.be.visible);

  defineStep(/^I (?:can|don)'t (?:find|identify|see|spot).*? (`.*`).*?$/, selectorChain =>
    client.expect.element(nestedSelector(selectorChain)).to.not.be.visible);

  defineStep(/^I (?:enter|input|supply|type).*? "(.*?)" in.*? (`.*`)$/, (value, selectorChain) =>
    client.setValue(nestedSelector(selectorChain), value));

  defineStep(/^I (?:activate|click).*? (`.*`)$/, selectorChain =>
    client.click(nestedSelector(selectorChain)));
});
