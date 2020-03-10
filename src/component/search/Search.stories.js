import React from 'react';
import { storiesOf } from '@storybook/react';
import Search from './Search';

storiesOf('Search', module)

.add("Search Bar", () => 
<Search
grid
/>)