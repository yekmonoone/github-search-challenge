/**
 * Renders the details of a user, including their avatar, name, login, number of repositories, followers, and following.
 * Provides a button to navigate to the user's repositories.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.username - The username of the user.
 * @returns {JSX.Element} The rendered UserDetails component.
 */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './UserDetails.css';
import getUser from '../../api/getUser';

type UserDetailsProps = {
    username: string;
}

const UserDetails: React.FC<UserDetailsProps> = ({ username }: UserDetailsProps) => {
    const [userInfo, setUserInfo] = useState<any>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const user = await getUser(username);
                setUserInfo(user);

            } catch (error) {
                setUserInfo(null);
            }
        };

        fetchUserData();
    }, [username]);

    return (
        <div className="user-details">
            {userInfo && (
                <>
                    <img
                        src={userInfo.avatar_url}
                        alt={`${userInfo.login}'s avatar`}
                        className="user-avatar"
                    />
                    <div className="user-info">
                        <h2>{userInfo.name}</h2>
                        <p>Login: {userInfo.login}</p>
                        <p>Repos: {userInfo.repos}</p>
                        <p>Followers: {userInfo.followers}</p>
                        <p>Following: {userInfo.following}</p>

                        {/* Add a button to navigate to "./repository" */}
                        <button>
                            <Link to={`/${username}/repository`}>Repositories</Link>
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default UserDetails;
