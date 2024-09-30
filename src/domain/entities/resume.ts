import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { User } from './user';

export type ResumeDocument = HydratedDocument<Resume>;

@Schema({ collection: 'Resume', versionKey: false })
export class Resume {
  @Prop({ required: true, unique: true })
  fileName: string;

  @Prop({ required: true, unique: true })
  fileUrl: string;

  @Prop({ type: Types.ObjectId, required: true, ref: 'User' })
  userId: Types.ObjectId | User;

  @Prop()
  jobDescription: string;
}

export const ResumeSchema = SchemaFactory.createForClass(Resume);
