import React from 'react';
import { storiesOf } from '@storybook/react';
import Form from './Form';

storiesOf('Form', module)

.add('Form Email', () => <Form
placeholder="Username"
/>)