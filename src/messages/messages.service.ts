/* eslint-disable prettier/prettier */
import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  constructor(public messageRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  async findAll() {
    return this.messageRepo.findAll();
  }

  async create(content: string) {
    return this.messageRepo.create(content);
  }
}
