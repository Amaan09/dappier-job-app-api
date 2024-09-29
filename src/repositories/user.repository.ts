import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, CreateUserRequest } from "src/domain";

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private model: Model<User>) {}

  async createUser(createUserRequest: CreateUserRequest): Promise<User> {
    const createdUser = new this.model(createUserRequest);
    return await createdUser.save();
  }

  async getAllUsers(): Promise<User[]> {
    return await this.model.find().exec();
  }
}
