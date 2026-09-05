import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Experience, ExperienceDocument } from './schemas/experience.schema.js';
import { CreateExperienceDto } from './dto/create-experience.dto.js';
import { UpdateExperienceDto } from './dto/update-experience.dto.js';

@Injectable()
export class ExperienceService {
  constructor(
    @InjectModel(Experience.name)
    private experienceModel: Model<ExperienceDocument>,
  ) {}

  create(dto: CreateExperienceDto): Promise<ExperienceDocument> {
    const created = new this.experienceModel(dto);
    return created.save();
  }

  findAll(): Promise<ExperienceDocument[]> {
    return this.experienceModel.find().exec();
  }

  async findOne(id: string): Promise<ExperienceDocument> {
    const item = await this.experienceModel.findById(id).exec();
    if (!item) {
      throw new NotFoundException(`Experience with id ${id} not found`);
    }
    return item;
  }

  async update(
    id: string,
    dto: UpdateExperienceDto,
  ): Promise<ExperienceDocument> {
    const updated = await this.experienceModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();
    if (!updated) {
      throw new NotFoundException(`Experience with id ${id} not found`);
    }
    return updated;
  }

  async remove(id: string): Promise<void> {
    const result = await this.experienceModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Experience with id ${id} not found`);
    }
  }
}