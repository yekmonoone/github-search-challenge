/**
 * User component that displays the user details page.
 * @returns React component
 */
import React from 'react';
import { useParams } from 'react-router-dom';
import UserDetails from '../components/UserDetails/UserDetails'; 

const User: React.FC = () => {
    const { username } = useParams()

    if(!username) {
        return <h1>No username provided</h1>;
    }
    
    return (
        <div className="user-page">
            <h2>User Details Page</h2>
            <UserDetails username={username ?? ""} />
        </div>
    );
};

export default User;
