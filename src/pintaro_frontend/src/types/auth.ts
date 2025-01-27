export interface AuthUser {
    id: string;
    email: string;
    username: string;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterCredentials {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
}