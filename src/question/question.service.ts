import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionPosition } from 'src/questionPosition/entities/question-position.entity';
import { Round } from 'src/round/entities/round.entity';
import { Repository } from 'typeorm';
import { CreateQuestionInput } from './dto/create-question.input';
import { Question } from './entities/question.entity';
// import { UpdateQuestionInput } from './dto/update-question.input';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question) private questionRepo: Repository<Question>,
    @InjectRepository(Round) private roundRepo: Repository<Round>,
    @InjectRepository(QuestionPosition)
    private questionPositionRepo: Repository<QuestionPosition>,
  ) {}
  async create({ prompt, answer, position, roundID }: CreateQuestionInput) {
    const question = this.questionRepo.create({
      prompt,
      answer,
    });

    await this.questionRepo.save(question);

    this.insertQuestion(question, roundID, position);

    return question;
  }

  private async insertQuestion(
    question: Question,
    roundID: number,
    position: number,
  ) {
    const round = await this.roundRepo.findOneOrFail(roundID, {
      relations: ['questions'],
    });

    if (position >= round.questions.length) {
      const questionPosition = this.questionPositionRepo.create({
        round,
        question,
        position: round.questions.length,
      });
      await this.questionPositionRepo.save(questionPosition);
    } else {
      for (const questionPosition of round.questions) {
        if (questionPosition.position > position) {
          await this.questionRepo
            .createQueryBuilder()
            .update(QuestionPosition)
            .set({
              position: questionPosition.position + 1,
            })
            .where('id = :id', { id: questionPosition.positionId })
            .execute();
        }
      }

      const questionPosition = this.questionPositionRepo.create({
        round,
        question,
        position,
      });
      await this.questionPositionRepo.save(questionPosition);
    }
  }
}
