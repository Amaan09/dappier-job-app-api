import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, CreateUserRequest, UserDocument } from "src/domain";

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private model: Model<User>) {}

  async createUser(createUserRequest: CreateUserRequest): Promise<UserDocument> {
    const createdUser = new this.model(createUserRequest);
    return await createdUser.save();
  }

  async getAllUsers(): Promise<UserDocument[]> {
    return await this.model.find().exec();
  }

  async getUserByEmail(email: string): Promise<UserDocument> {
    return await this.model.findOne({ email }).exec();
  }
}
