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

    const { questions } = round;

    console.log(questions)

    if (position >= questions.length) {
      console.log('appending question to the end');
      const questionPosition = this.questionPositionRepo.create({
        round,
        question,
        position: questions.length,
      });
      await this.questionPositionRepo.save(questionPosition);
    } else {
      console.log('appending question at position', position);
      const questionPosition = this.questionPositionRepo.create({
        round,
        question,
        position,
      });
      await this.questionPositionRepo.save(questionPosition);

      questions.splice(position, 0, questionPosition);

      for (const [i, q] of questions.entries()) {
        await this.questionPositionRepo
          .createQueryBuilder()
          .update(QuestionPosition)
          .set({
            position: i,
          })
          .where('id = :id', { id: q.id })
          .execute()
          .then(() =>
            console.log(`updated question ${q.id} to position ${i}`),
          );
      }
    }
  }
}
