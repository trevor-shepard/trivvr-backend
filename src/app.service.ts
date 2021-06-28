import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './question/entities/question.entity';
import { RoundToQuestion } from './round-to-question/entities/round-to-question.entity';
import { Round } from './round/entities/round.entity';
import { Trivia } from './trivia/entities/trivia.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Question) private questionRepo: Repository<Question>,
    @InjectRepository(Trivia) private triviaRepo: Repository<Trivia>,
    @InjectRepository(Round) private roundRepo: Repository<Round>,
    @InjectRepository(RoundToQuestion)
    private roundToQuestionRepo: Repository<RoundToQuestion>,
  ) {}

  async seed() {
    const trivia = this.triviaRepo.create({
      name: 'seeded trivia',
    });
    const rounds = [];
    for (const roundIndex of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
      const round = this.roundRepo.create({ position: roundIndex });
      const roundToQuestions = [];
      for (const questionIndex of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        const prompt = `What is ${roundIndex} + ${questionIndex}`;
        const answer = `${roundIndex + questionIndex}`;
        console.log('prompt: answer', prompt, answer);
        const question = this.questionRepo.create({
          prompt,
          answer,
        });
        const roundToQuestion = this.roundToQuestionRepo.create({
          position: questionIndex,
          question,
          round,
        });

        question.roundToQuestion = [
          ...question.roundToQuestion,
          roundToQuestion,
        ];

        this.questionRepo.save(question);

        this.roundToQuestionRepo.save(roundToQuestion);
      }

      round.roundToQuestion = roundToQuestions;

      await this.roundRepo.save(round);
      rounds.push(round);
    }

    trivia.rounds = rounds;

    await this.triviaRepo.save(trivia);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
