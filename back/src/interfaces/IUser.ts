export interface IUser {
    _id: string;
    name: string;
    surName: string;
    email: string;
    password: string;
    neighborhood: string[];
    img?: string;
    role: string;
    active: boolean;
    points: number;
}