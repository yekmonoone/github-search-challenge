import { Meta, Story } from '@storybook/react';
import RepositoryCard from './RepositoryCard'; // Update the import path based on your project structure

export default {
  title: 'Components/RepositoryCard',
  component: RepositoryCard,
} as Meta;

const Template: Story = () => <RepositoryCard id={0} name={'mvst'} description={'github-challenge'} language={'typescript'} stargazers_count={5} forks_count={5} updated_at={'01/01/2000'} html_url={''} owner={{
    avatar_url: '',
    login: ''
}} />;

export const Default = Template.bind({});
Default.args = {};
