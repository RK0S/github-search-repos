export type Order = 'asc' | 'desc';

export interface User {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    public_repos?: number;
    public_gists?: number;
    followers?: number;
    following?: number;
}

export interface UserSchema {
    data?: User;
    isLoading: boolean;
    error?: string;
}

export interface UsersSchema {
    isLoading: boolean;
    error?: string;
    users: User[];
    total_count: number;

    // Query parameters
    q: string;
    order: Order;
    page: number;
}

export interface UsersFetchingResponse {
    total_count: number;
    items: User[];
}
