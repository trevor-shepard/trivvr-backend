import { Injectable } from '@nestjs/common';
import { CreateTriviaInput } from './dto/create-trivia.input';
import { UpdateTriviaInput } from './dto/update-trivia.input';

@Injectable()
export class TriviaService {
  create(createTriviaInput: CreateTriviaInput) {
    return 'This action adds a new trivia';
  }

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
