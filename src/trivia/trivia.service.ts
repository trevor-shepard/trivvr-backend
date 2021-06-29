import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTriviaInput } from './dto/create-trivia.input';
import { UpdateTriviaInput } from './dto/update-trivia.input';
import { Trivia } from './entities/trivia.entity';

@Injectable()
export class TriviaService {
  constructor(
    @InjectRepository(Trivia) private triviaRepo: Repository<Trivia>,
  ) {}

  // TODO
  // async create(createTriviaInput: CreateTriviaInput) {
  //   const { name, userID } = createTriviaInput

  //   const trivia = this.triviaRepo.create({

  //   })

  // }

  findAll() {
    return `This action returns all trivia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trivia`;
  }

  update(id: number, updateTriviaInput: UpdateTriviaInput) {
    return `This action updates a #${id} trivia`;
  }

  remove(id: number) {
    return `This action removes a #${id} trivia`;
  }
}
