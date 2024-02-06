import { Meta, Story } from '@storybook/react';
import Navbar from './Navbar'; // Update the import path based on your project structure

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as Meta;

const Template: Story = () => <Navbar />;

export const Default = Template.bind({});
Default.args = {};
