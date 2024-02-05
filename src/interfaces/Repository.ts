interface Repository {
    id: number;
    name: string;
    description: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
    html_url: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

export default Repository;