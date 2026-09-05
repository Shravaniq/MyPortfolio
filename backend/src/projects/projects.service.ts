import { ProjectsModule } from './projects.module.js';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Project } from './schemas/project.schema.js';
import { promises } from 'dns';
import { CreateProjectDto } from './dto/create-project.dto.js';
import { InjectModel } from '@nestjs/mongoose';
import { ProjectDocument } from './schemas/project.schema.js';
import { Model } from 'mongoose';
import { UpdateProjectDto } from './dto/update-project.dto.js';

@Injectable()
export class ProjectsService {
    constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
  ) {}

  create(dto: CreateProjectDto): Promise<Project> {
    const created = new this.projectModel(dto);
    return created.save();
  }

  findAll(): Promise<Project[]> {
    return this.projectModel.find().exec();
  }

 async findOne(id: string): Promise<Project> {
    const project = await this.projectModel.findById(id).exec();
    if (!project) {
      throw new NotFoundException(`Project with id ${id} not found`);
    }
    return project;
  }

   async update(id: string, dto: UpdateProjectDto): Promise<Project> {
    const updated = await this.projectModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();
    if (!updated) {
      throw new NotFoundException(`Project with id ${id} not found`);
    }
    return updated;
  }

  async remove(id: string): Promise<void> {
    const result = await this.projectModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Project with id ${id} not found`);
    }
  }

}
