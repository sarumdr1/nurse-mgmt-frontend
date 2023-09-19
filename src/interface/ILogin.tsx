export interface ILoginInput {
    data: {
        email: string
        password: string
    }
}

export interface ILoginResponse {
    data: {
        token: string
        email: string
    }
}