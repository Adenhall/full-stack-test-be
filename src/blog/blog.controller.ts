import { Controller, Get } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private serv: BlogService) {}

  @Get()
  public async getAll() {
    return await this.serv.getAll();
  }
}
