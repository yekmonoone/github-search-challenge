/**
 * Represents the page component for displaying a user's repositories.
 */
import React from 'react';
import { useParams } from 'react-router-dom';
import SearchUserRepository from '../components/SearchUserRepository/SearchUserRepository';

/**
 * Represents the parameters for the RepositoryPage component.
 */
type RepositoryPageParams = {
    username: string;
    [key: string]: string;
}

/**
 * Represents the RepositoryPage component.
 */
const RepositoryPage: React.FC = () => {
    const { username } = useParams<RepositoryPageParams>();

    if(!username) {
        return <h1>No repository founded</h1>;
    }

    return (
        <div className="repository-page">
            <h1>{`${username}'s Repositories`}</h1>
            <SearchUserRepository username={username} />
        </div>
    );
};

export default RepositoryPage;
