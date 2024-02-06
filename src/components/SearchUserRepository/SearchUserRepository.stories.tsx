import { Meta, Story } from '@storybook/react';
import SearchUserRepository from './SearchUserRepository'; // Update the import path based on your project structure

export default {
  title: 'Components/SearchUserRepository',
  component: SearchUserRepository,
} as Meta;

const Template: Story = (args) => <SearchUserRepository username={'yekmonoone'} />;

export const Default = Template.bind({});
Default.args = {};
