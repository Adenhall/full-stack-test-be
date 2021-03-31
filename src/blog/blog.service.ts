import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from '../models/blog.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog) private readonly repo: Repository<Blog>,
  ) {}

  public async getAll() {
    return await this.repo.find();
  }
}
