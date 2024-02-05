/**
 * UserSearchBar component for searching GitHub users.
 */
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import './UserSearchBar.css'; 

/**
 * UserSearchBar functional component.
 */
const UserSearchBar: React.FC = () => {
    const [username, setUsername] = useState<string>('');

    const navigate = useNavigate();

    return (
        <div className="user-search-bar">
            <input
                type="text"
                placeholder="Enter GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={() => navigate(`/${username}`)}>Search</button>
        </div>
    );
};

export default UserSearchBar;
