import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ExperienceDocument = HydratedDocument<Experience>;

@Schema({ timestamps: true })
export class Experience {
  @Prop({ required: true })
  role: string;

  @Prop({ required: true })
  company: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  duration: string;

  @Prop({ type: [String], default: [] })
  points: string[];
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);