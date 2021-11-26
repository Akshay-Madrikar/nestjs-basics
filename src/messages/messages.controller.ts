import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    console.log();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log();
  }

  @Get('/:id')
  getMessage(@Param() id: string) {
    console.log();
  }
}
