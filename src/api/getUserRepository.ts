/**
 * Retrieves the repositories of a user from the GitHub API.
 * @param username - The username of the user.
 * @returns A promise that resolves to an array of Repository objects.
 * @throws An error if the API request fails.
 */


import Repository from "../interfaces/Repository";



const getUserRepository = async (username: string): Promise<Repository[]> => {
    const headers = {
        Authorization: "Bearer [YOUR_GITHUB_TOKEN]",
    };

    const res = await fetch(`https://api.github.com/users/${username}/repos`, { headers });

    if (!res.ok) {
        throw new Error(`Failed to fetch user ${username}: ${res.status}`);
    }

    const data = await res.json();
    
    const repositories : Repository[] = data?.map((repository: any) => ({
        id: repository.id,
        name : repository.name,
        description : repository.description,
        language : repository.language,
        stargazers_count : repository.stargazers_count,
        forks_count : repository.forks_count,
        html_url : repository.html_url,
        owner : {
            id : repository.owner.id,
            login : repository.owner.login
        },
        updated_at : repository.updated_at
    }))
    
    return repositories;
};

export default getUserRepository;
