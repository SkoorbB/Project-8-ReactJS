import React from 'react';
import { storiesOf } from '@storybook/react';
import Form from './Form';

storiesOf('Form', module)

.add('Form User', () => <Form
placeholder="Username"
/>)

.add('Form Pass', () => <Form
placeholder="Password"
/>)