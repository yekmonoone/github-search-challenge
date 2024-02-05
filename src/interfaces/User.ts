interface User {
    id: number;
    name: string;
    login: string;
    avatar_url: string;
    biography: string;
    repository: number;
    followers: number;
    following: number;
    location: string;
    repository_url: string;
}

export default User;