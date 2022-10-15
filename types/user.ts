export interface IUser {
    id: string,
    name: string,
    status: string,
    image: string
}

export interface IUserDetail {
    id: string,
    name: string,
    status: string,
    gender: string,
    origin: {
        id: string,
        name: string,
    }
    location: {
        id: string,
        name: string,
    }
    image: string
}