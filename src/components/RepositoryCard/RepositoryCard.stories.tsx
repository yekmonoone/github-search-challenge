import { Meta, Story } from '@storybook/react';
import RepositoryCard from './RepositoryCard'; 

/**
 * Storybook metadata for the RepositoryCard component.
 */
export default {
  title: 'Components/RepositoryCard',
  component: RepositoryCard,
} as Meta;

/**
 * Template for the RepositoryCard component story.
 */
const Template: Story = () => <RepositoryCard id={0} name={'mvst'} description={'github-challenge'} language={'typescript'} stargazers_count={5} forks_count={5} updated_at={'01/01/2000'} html_url={''} owner={{
    avatar_url: '',
    login: ''
}} />;

export const Default = Template.bind({});
Default.args = {};
