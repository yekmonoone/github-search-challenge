import { render, screen } from '@testing-library/react';
import RepositoryList from '../components/RepositoryList/RepositoryList';
import '@testing-library/jest-dom';

describe('RepositoryList', () => {
  const repositories = [
    {
      id: 0,
      forks_count: 5,
      owner: {
        login: 'test',
        avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4'
      },
      name: 'Test Repository',
      description: 'This is a test repository',
      language: 'TypeScript',
      stargazers_count: 10,
      html_url: 'https://github.com/test/repository',
      updated_at: '2022-01-01',
    },
    {
      id: 1,
      forks_count: 5,
      owner: {
        login: 'test',
        avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4'
      },
      name: 'Test 1 Repository',
      description: 'This is a test repository',
      language: 'TypeScript',
      stargazers_count: 10,
      html_url: 'https://github.com/test/repository',
      updated_at: '2022-01-01',
    },
    {
      id: 2,
      forks_count: 5,
      owner: {
        login: 'test',
        avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4'
      },
      name: 'Test 2 Repository',
      description: 'This is a test repository',
      language: 'TypeScript',
      stargazers_count: 10,
      html_url: 'https://github.com/test/repository',
      updated_at: '2022-01-01',
    },
  ];

  it('renders the list of repositories', () => {
    render(<RepositoryList repositories={repositories} />);
    
    const repositoryName = screen.getByText(repositories[0].name);
    expect(repositoryName).toBeInTheDocument();
    const repositoryName1 = screen.getByText(repositories[1].name);
    expect(repositoryName1).toBeInTheDocument();
    const repositoryName2 = screen.getByText(repositories[2].name);
    expect(repositoryName2).toBeInTheDocument();
  });

  it('renders the correct number of repositories', () => {
    render(<RepositoryList repositories={repositories} />);
    
    const repositoryList = screen.getByTestId('repository-list');
    expect(repositoryList.children.length).toBe(repositories.length);
  });
});