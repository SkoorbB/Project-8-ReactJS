import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('buttons', module)

.add('Default', () => <Button
label="Enter"
type="button"
white
/>)