import { Meta, Story } from '@storybook/react';
import Navbar from './Navbar'; 
import React from 'react';

/**
 * Storybook configuration for the Navbar component.
 */
export default {
  title: 'Components/Navbar',
  component: Navbar,
} as Meta;

const Template: Story = () => <Navbar />;

export const Default = Template.bind({});
Default.args = {};
