import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../models/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
  ) {}

  public async getAll() {
    return await this.repo.find();
  }

  public async create(body: any) {
    const newUser = this.repo.create(body);
    return this.repo.save(newUser);
  }
}
