import { render,screen } from '@testing-library/react';
import RepositoryCard from '../components/RepositoryCard/RepositoryCard';
import '@testing-library/jest-dom';


describe('RepositoryCard', () => {
  const repository = {
    id: 0,
    forks_count: 5,
    owner: {
      login: 'test',
      avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4'},
    name: 'Test Repository',
    description: 'This is a test repository',
    language: 'TypeScript',
    stargazers_count: 10,
    html_url: 'https://github.com/test/repository',
    updated_at: '2022-01-01',
  };

  it('renders repository name and description', () => {
    render(<RepositoryCard {...repository} />);
    const repositoryName = screen.getByText(repository.name);
    expect(repositoryName).toBeInTheDocument();
    const repositoryDescription = screen.getByText(repository.description);
    expect(repositoryDescription).toBeInTheDocument();
  });

  it('renders repository language and stargazers count', () => {
    render(<RepositoryCard {...repository} />);
    const repositoryLanguage = screen.getByText(`Language: ${repository.language}`);
    expect(repositoryLanguage).toBeInTheDocument();
    const repositoryStargazersCount = screen.getByText(`Stargazers Count: ${repository.stargazers_count}`);
    expect(repositoryStargazersCount).toBeInTheDocument();
  });
});
