import { IUser } from "./IUsers";

export interface IMessage {
    Id: string;
    Value: string;
    User: IUser;
    Date: Date;
}