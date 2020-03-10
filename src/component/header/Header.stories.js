import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './Header'

storiesOf('header', module)

.add('Netfly', () => <Header
label="Netfly"
type="header"
text
/>)