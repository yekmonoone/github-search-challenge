/**
 * Renders a list of repositories.
 *
 * @component
 * @param {Object[]} repositories - The array of repositories to be rendered.
 * @returns {JSX.Element} The rendered RepositoryList component.
 */
import React, { useEffect, useState } from 'react';
import RepositoryCard from '../RepositoryCard/RepositoryCard'; 
import './RepositoryList.css';


interface RepositoryListProps {
    repositories: any[];
}

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories }) => {
    
    return (
        <div className="repository-list">
            {repositories.map((repo) => (
                <RepositoryCard key={repo.id} {...repo} />
            ))}
        </div>
    );
};

export default RepositoryList;
