/**
 * Represents a card component for displaying repository information.
 *
 * @param {string} name - The name of the repository.
 * @param {string} description - The description of the repository.
 * @param {string} language - The programming language used in the repository.
 * @param {number} stargazers_count - The number of stargazers for the repository.
 * @param {string} html_url - The URL of the repository on GitHub.
 * @param {string} updated_at - The last updated date of the repository.
 * @returns {JSX.Element} The repository card component.
 */
import React from 'react';
import './RepositoryCard.css';
import Repository from '../../interfaces/Repository';


const RepositoryCard: React.FC<Repository> = ({ name, description, language, stargazers_count, html_url, updated_at }: Repository) => {
    return (
        <div className="repository-card">
            <h2 data-testid="repository_name">{name}</h2>
            <p>{description}</p>
            <p>Language: {language}</p>
            <p>Stargazers Count: {stargazers_count}</p>
            <p>Last Updated: {new Date(updated_at).toLocaleDateString()}</p>
            <a href={html_url} target="_blank" rel="noopener noreferrer">
                View on GitHub
            </a>
        </div>
    );
};

export default RepositoryCard;
