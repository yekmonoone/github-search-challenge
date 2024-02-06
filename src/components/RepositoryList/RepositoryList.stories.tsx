import { Meta, Story } from '@storybook/react';
import RepositoryList from './RepositoryList'; // Update the import path based on your project structure
import getUserRepository from '../../api/getUserRepository';

const userRepositories = await getUserRepository('yekmonoone'); // Replace 'username' with the actual username

export default {
    title: 'Components/RepositoryList',
    component: RepositoryList,
} as Meta;

const Template: Story = (args) => <RepositoryList repositories={userRepositories} />;


export const Default = Template.bind({});

