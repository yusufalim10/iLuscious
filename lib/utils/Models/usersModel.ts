import { foodModel } from "./foodsModel";

export interface userModel {
    id?: string,
    name: string,
    username: string,
    email: string,
    password: string,
    imageUrl?: string,
    accessToken?: string,
    foodOrdered?: foodModel[]
}