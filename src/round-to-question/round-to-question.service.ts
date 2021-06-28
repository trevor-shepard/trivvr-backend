import { Injectable } from '@nestjs/common';
import { CreateRoundToQuestionInput } from './dto/create-round-to-question.input';
import { UpdateRoundToQuestionInput } from './dto/update-round-to-question.input';

@Injectable()
export class RoundToQuestionService {
  create(createRoundToQuestionInput: CreateRoundToQuestionInput) {
    return 'This action adds a new roundToQuestion';
  }

  findAll() {
    return `This action returns all roundToQuestion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roundToQuestion`;
  }

  update(id: number, updateRoundToQuestionInput: UpdateRoundToQuestionInput) {
    return `This action updates a #${id} roundToQuestion`;
  }

  remove(id: number) {
    return `This action removes a #${id} roundToQuestion`;
  }
}
