import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProjectDocument = HydratedDocument<Project>;

@Schema({ timestamps: true })
export class Project {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  duration: string;

  @Prop()
  location?: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: [String], default: [] })
  points: string[];

  @Prop({ type: [String], default: [] })
  skills: string[];

  @Prop()
  githubUrl?: string;

  @Prop()
  liveUrl?: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);