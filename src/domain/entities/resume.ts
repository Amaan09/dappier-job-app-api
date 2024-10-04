import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types, now } from 'mongoose';
import { User } from './user';

export type ResumeDocument = HydratedDocument<Resume>;

@Schema({ collection: 'Resume', versionKey: false })
export class Resume {
  @Prop({default: now()})
  dateCreated: Date;

  @Prop({default: now()})
  dateUpdated: Date;

  @Prop({ required: true, unique: true })
  fileName: string;

  @Prop({ required: true, unique: true })
  fileUrl: string;

  @Prop({ required: true, unique: true })
  namespaceId: string;

  @Prop({ type: Types.ObjectId, required: true, ref: 'User' })
  userId: Types.ObjectId | User;

  @Prop()
  jobDescription: string;

  @Prop()
  nickName: string;
}

export const ResumeSchema = SchemaFactory.createForClass(Resume);
