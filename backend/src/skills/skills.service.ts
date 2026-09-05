import { Injectable, NotFoundException } from '@nestjs/common';
import { Skill, SkillDocument } from './schemas/skill.schema.js';
import { CreateSkillDto } from './dtos/create-skill.dto.js';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateSkillDto } from './dtos/update-skill.dto.js';

@Injectable()
export class SkillsService {

     constructor(
    @InjectModel(Skill.name) private skillModel: Model<SkillDocument>,
  ) {}


  create(dto:CreateSkillDto):Promise<SkillDocument>{
        const created = new this.skillModel(dto);
        return created.save();
  }

  findAll() :Promise<SkillDocument[]> {
    return this.skillModel.find().exec();
  }

   async findOne(id: string): Promise<SkillDocument> {
    const skill = await this.skillModel.findById(id).exec();
    if (!skill) {
      throw new NotFoundException(`Skill with id ${id} not found`);
    }
    return skill;
  }

    async update(id: string, dto: UpdateSkillDto): Promise<SkillDocument> {
    const updated = await this.skillModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();
    if (!updated) {
      throw new NotFoundException(`Skill with id ${id} not found`);
    }
    return updated;
  }

  async remove(id: string): Promise<void> {
    const result = await this.skillModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Skill with id ${id} not found`);
    }
  }

}