import React from 'react';
import { render } from '@testing-library/react';
import RepositoryCard from './RepositoryCard';

describe('RepositoryCard', () => {
  const repository = {
    name: 'Test Repository',
    description: 'This is a test repository',
    language: 'JavaScript',
    stargazers_count: 10,
    html_url: 'https://github.com/test/repository',
    updated_at: '2022-01-01T00:00:00Z',
  };

  it('renders repository information correctly', () => {
    const { getByText, getByTestId } = render(<RepositoryCard id={0} forks_count={0} owner={{
      login: '',
      avatar_url: ''
    }} {...repository} />);

    expect(getByText(repository.name)).toBeInTheDocument();
    expect(getByText(repository.description)).toBeInTheDocument();
    expect(getByText(`Language: ${repository.language}`)).toBeInTheDocument();
    expect(getByText(`Stargazers Count: ${repository.stargazers_count}`)).toBeInTheDocument();
    expect(getByText(`Last Updated: ${new Date(repository.updated_at).toLocaleDateString()}`)).toBeInTheDocument();
    expect(getByTestId('repository-link')).toHaveAttribute('href', repository.html_url);
  });
});