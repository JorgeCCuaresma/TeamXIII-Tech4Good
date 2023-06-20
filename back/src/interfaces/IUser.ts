export interface IUser {
    _id: string;
    name: string;
    surName: string;
    email: string;
    password: string;
    img?: string;
    role: string;
    status: boolean;
}