import { Module } from '@nestjs/common';
import { ExperienceController } from './experience.controller.js';
import { ExperienceService } from './experience.service.js';
import { MongooseModule } from '@nestjs/mongoose';
import { Experience, ExperienceSchema } from './schemas/experience.schema.js';

@Module({
   imports: [
    MongooseModule.forFeature([
      { name: Experience.name, schema: ExperienceSchema },
    ]),
  ],
  controllers: [ExperienceController],
  providers: [ExperienceService]
})
export class ExperienceModule {}
