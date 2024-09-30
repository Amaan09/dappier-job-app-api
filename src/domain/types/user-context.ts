import { Types } from "mongoose";

export class UserContext {
    userId: Types.ObjectId;

    email: string;
}
