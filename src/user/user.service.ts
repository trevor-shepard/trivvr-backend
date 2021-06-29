import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/createUserInput.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async createUser(createUserInput: CreateUserInput): Promise<User> {
    const user = this.userRepo.create(createUserInput);

    await this.userRepo.save(user);

    return user;
  }
}
