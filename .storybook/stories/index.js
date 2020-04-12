import React from 'react';
import CustomButton from '../../src';
import { jsxDecorator } from 'storybook-addon-jsx'
import { storiesOf } from '@storybook/react'

storiesOf('Custom button', module)
  .addDecorator(jsxDecorator)
  .add("simple", () => <CustomButton/>)
;
