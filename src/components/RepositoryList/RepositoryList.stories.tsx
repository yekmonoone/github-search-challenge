import { Meta, Story } from '@storybook/react';
import RepositoryList from './RepositoryList'; 
import getUserRepository from '../../api/getUserRepository';

/**
 * Retrieves the repositories of a user and displays them in a list.
 * @param {string} username - The username of the user whose repositories will be retrieved.
 */

const userRepositories = await getUserRepository('yekmonoone');

export default {
    title: 'Components/RepositoryList',
    component: RepositoryList,
} as Meta;

const Template: Story = () => <RepositoryList repositories={userRepositories} />;


export const Default = Template.bind({});

