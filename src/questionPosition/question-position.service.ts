import { Injectable } from '@nestjs/common';
import { CreateQuestionPositionInput } from './dto/create-round-to-question.input';
import { UpdateQuestionPositionInput } from './dto/update-round-to-question.input';

@Injectable()
export class QuestionPositionService {
  create(createQuestionPositionInput: CreateQuestionPositionInput) {
    return 'This action adds a new position';
  }

  findAll() {
    return `This action returns all position`;
  }

  findOne(id: number) {
    return `This action returns a #${id} position`;
  }

  update(id: number, updateQuestionPositionInput: UpdateQuestionPositionInput) {
    return `This action updates a #${id} position`;
  }

  remove(id: number) {
    return `This action removes a #${id} position`;
  }
}
