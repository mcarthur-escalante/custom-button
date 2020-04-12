import { configure, setAddon } from '@storybook/react';
import JXSAddon from 'storybook-addon-jsx';

setAddon(JXSAddon);

configure(() => require('./stories'), module);
