import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, now } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ collection: 'User', versionKey: false })
export class User {
  @Prop({default: now()})
  dateCreated: Date;

  @Prop({default: now()})
  dateUpdated: Date;
  
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
