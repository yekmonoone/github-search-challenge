/**
 * Component for searching user repositories.
 * 
 * @component
 * @param {string} username - The username of the user whose repositories will be searched.
 * @returns {JSX.Element} The rendered SearchUserRepository component.
 */
import React, { useState, useEffect } from 'react';
import getUserRepository from '../../api/getUserRepository';
import RepositoryList from '../RepositoryList/RepositoryList'; 

type SearchUserRepositoryProps = {
    username: string;
}

const SearchUserRepository: React.FC<SearchUserRepositoryProps> = ({ username }) => {
    const [allLanguages, setAllLanguages] = useState<string[]>([]); 
    const [searchString, setSearchString] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('all');
    const [repositories, setRepositories] = useState<any[]>([]);
    const [filteredRepositories, setFilteredRepositories] = useState<any[]>([]);

    /**
     * Fetches the user repositories and updates the state.
     */
    const fetchUserRepositories = async () => {
        try {
                const userRepositories = await getUserRepository(username);
                const languages = userRepositories.map((repo) => repo.language);
                const clearLanguages = languages.filter((language) => language !== null);
                const uniqueLanguages = Array.from(new Set(clearLanguages));
                setAllLanguages(uniqueLanguages);
                setRepositories(userRepositories);
                setFilteredRepositories(userRepositories);
        } catch (error) {
            setRepositories([]);
        }
    };

    /**
     * Filters the repositories based on the search string and selected language.
     */
    const filterRepositories = () => {
        const filteredRepos = repositories.filter((repo) => {
            const matchesSearchString = repo.name.toLowerCase().includes(searchString.toLowerCase());
            const matchesLanguage = selectedLanguage === 'all' || repo.language === selectedLanguage;
            return matchesSearchString && matchesLanguage;
        });

        setFilteredRepositories(filteredRepos);
    };
    
    useEffect (()  => {
        fetchUserRepositories();
        console.log(username);
    }, [username]);

    useEffect(() => {
        filterRepositories();
    }, [searchString, selectedLanguage]);

    return (
        <div>
            <div>
                <label htmlFor="searchString">Search Repositories:</label>
                <input
                    type="text"
                    id="searchString"
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="language">Select Language:</label>
                <select
                    id="language"
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                >
                    <option key="" value="all"></option>
                    {allLanguages.map((language) => (
                        <option key={language} value={language}>
                            {language}
                        </option>
                    ))}
                </select>
            </div>
            <RepositoryList repositories={filteredRepositories} />
        </div>
    );
};

export default SearchUserRepository;
