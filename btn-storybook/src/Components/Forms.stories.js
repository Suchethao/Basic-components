import React from 'react';
import { storiesOf } from '@storybook/react';

import Forms from './Forms';

export const Default = () => <Forms />;
export const Medium = () => <Forms size="medium" />;
export const Large = () => <Forms size="large" />;

storiesOf('Forms', module)
  .add('Default', Default)
  .add('Medium', Medium)
  .add('Large', Large);
