import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message, MessageDocument } from './schemas/message.schema.js';
import { CreateMessageDto } from './dto/create-message.dto.js';
import { UpdateMessageDto } from './dto/update-message.dto.js';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
  ) {}

  create(dto: CreateMessageDto): Promise<MessageDocument> {
    const created = new this.messageModel(dto);
    return created.save();
  }

  findAll(): Promise<MessageDocument[]> {
    return this.messageModel.find().sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string): Promise<MessageDocument> {
    const message = await this.messageModel.findById(id).exec();
    if (!message) {
      throw new NotFoundException(`Message with id ${id} not found`);
    }
    return message;
  }

  async update(id: string, dto: UpdateMessageDto): Promise<MessageDocument> {
    const updated = await this.messageModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();
    if (!updated) {
      throw new NotFoundException(`Message with id ${id} not found`);
    }
    return updated;
  }

  async remove(id: string): Promise<void> {
    const result = await this.messageModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Message with id ${id} not found`);
    }
  }
}