import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './question/entities/question.entity';
import { Round } from './round/entities/round.entity';
import { Trivia } from './trivia/entities/trivia.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Question) private questionRepo: Repository<Question>,
    @InjectRepository(Trivia) private triviaRepo: Repository<Trivia>,
    @InjectRepository(Round) private roundRepo: Repository<Round>,
  ) {}

  async seed() {
    const trivia = this.triviaRepo.create({
      name: 'seeded trivia',
    });
    const rounds = [];
    for (const roundIndex of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
      const round = this.roundRepo.create({ position: roundIndex });
      const questions = [];
      for (const questionIndex of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        const prompt = `What is ${roundIndex} + ${questionIndex}`;
        const answer = `${roundIndex + questionIndex}`;
        console.log('prompt: answer', prompt, answer);
        const question = this.questionRepo.create({
          prompt,
          answer,
        });

        await this.questionRepo.save(question);
        questions.push(question);
      }
      round.questions = questions;
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
