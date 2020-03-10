import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('buttons', module)

.add('Default', () => <Button
label="Enter"
white
Button
/>)

.add('Create Button', () => <Button
label="Create"
white
Button
/>)

.add('Read Button', () => <Button
label="Read"
white
Button
/>)

.add('Update Button', () => <Button
label="Update"
white
Button
/>)

.add('Delete Button', () => <Button
label="Delete"
white
Button
/>)
