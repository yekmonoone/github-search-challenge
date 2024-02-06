/**
 * Retrieves user information from the GitHub API.
 * @param username - The username of the user to fetch.
 * @returns A Promise that resolves to a User object containing the user's information.
 * @throws An error if the user cannot be fetched or if the response is not successful.
 */


import User from "../interfaces/User";

const getUser = async (username: string): Promise<User> => {
  const headers = {
    Authorization: "Bearer [YOUR_GITHUB_TOKEN]",
  };

  
    const res = await fetch(`https://api.github.com/users/${username}`, { headers });
    // const res = await fetch(`https://api.github.com/users/yekmonoone`, { headers });

    if (!res.ok) {
      throw new Error(`Failed to fetch user ${username}: ${res.status}`);
    }

    const data = await res.json();

    const user: User = {
      id: data.id,
      name: data.name,
      login: data.login,
      avatar_url: data.avatar_url,
      biography: data.bio,
      repository: data.public_repos,
      followers: data.followers,
      following: data.following,
      location: data.location,
      repository_url: data.repos_url,
    };
    
    return user;
  
};

export default getUser;
