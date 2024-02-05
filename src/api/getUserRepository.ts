import Repository from "../interfaces/Repository";


const getUserRepository = async (username: string): Promise<Repository[]> => {
    const headers = {
        Authorization: "Bearer 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",
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
