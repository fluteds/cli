'use strict';

const React = require('react');
const {Box, Text} = require('ink');
const BigText = require('ink-big-text');
const Gradient = require('ink-gradient');
const SelectInput = require('ink-select-input').default;
const open = require('open');

const handleSelect = item => {
  if (item.url) {
    open(item.url);
  }

  if (item.action) {
    item.action();
  }
};

const createItems = items => {
  for (const item of items) {
    item.key = item.url || item.label;
  }

  return items;
};

const items = createItems([
  {
    label: '🌎  Website',
    url: 'https://dont-ban.me'
  },
  {
    label: '🧰  GitHub',
    url: 'https://github.com/fluteds'
  },
  {
    label: '🦜  Twitter',
    url: 'https://twitter.com/intent/user?screen_name=fluted_'
  },
  {
    label: '🔐  PGP Key',
    url: 'https://keybase.io/fluted'
  },
  {
    label: '🐈  Kitten Cam',
    url: 'https://www.youtube.com/watch?v=R7vrbiDi0Tc&t=0s'
  },
  {
    label: '🚪  Quit',
    action() {
      process.exit();
    }
  }
]);

const menu = () => (
  <Box flexDirection="column">
    <Gradient name="pastel">
      <BigText text="fluteds"/>
    </Gradient>
    <Box marginBottom={1}>
    <Text>Website Designer • Open-Sourcer • Data Hoarder</Text>
    </Box>
    <SelectInput items={items} onSelect={handleSelect}/>
  </Box>
);

module.exports = menu;
