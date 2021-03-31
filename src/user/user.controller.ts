import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private serv: UserService) {}

  @Get()
  public async getAll() {
    return await this.serv.getAll();
  }

  @Post()
  public async create(@Body() body: any) {
    return await this.serv.create(body);
  }
}
