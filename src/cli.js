'use strict';

const meow = require('meow');
const importJsx = require('import-jsx');
const React = require('react');
const {render} = require('ink');

const menu = importJsx('./menu');

meow(`
  Usage
    $ npx @fluteds/cli
`);

render(React.createElement(menu));
