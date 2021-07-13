import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './question/entities/question.entity';
import { QuestionPosition } from './questionPosition/entities/question-position.entity';
import { Round } from './round/entities/round.entity';
import { Trivia } from './trivia/entities/trivia.entity';
import { User } from './user/entities/user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Question) private questionRepo: Repository<Question>,
    @InjectRepository(Trivia) private triviaRepo: Repository<Trivia>,
    @InjectRepository(Round) private roundRepo: Repository<Round>,
    @InjectRepository(QuestionPosition)
    private positionRepo: Repository<QuestionPosition>,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  // async seed() {
  //   const trivia = this.triviaRepo.create({
  //     name: 'seeded trivia',
  //     game_status: 'incomplete'
  //   });
  //   const rounds = [];

  //   for (const roundIndex of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
  //     const round = this.roundRepo.create({ position: roundIndex });
  //     const positions = [];
  //     for (const questionIndex of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
  //       const prompt = `What is ${roundIndex} + ${questionIndex}`;
  //       const answer = `${roundIndex + questionIndex}`;
  //       const question = await this.questionRepo.create({
  //         prompt,
  //         answer,
  //       });

  //       const position = await this.positionRepo.create({
  //         position: questionIndex,
  //         question,
  //         round,
  //       });

  //       await this.questionRepo.save(question);

  //       await this.positionRepo.save(position);
  //     }

  //     round.position = positions;

  //     await this.roundRepo.save(round);
  //     rounds.push(round);
  //   }

  //   trivia.rounds = rounds;

  //   await this.triviaRepo.save(trivia);
  // }

  async createUser() {
    const user = await this.userRepo.create({
      username: 'timbo',
      email: 't@a.com',
    });

    await this.userRepo.save(user);

    const trivia = this.triviaRepo.create({
      name: 'seeded trivia',
      game_status: 'incomplete',
      join_code: 'asdfasdfaecease',
    });

    trivia.admins = [user];

    await this.triviaRepo.save(trivia);

    for (const roundIndex of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
      const round = this.roundRepo.create({ position: roundIndex, trivia });
      await this.roundRepo.save(round);

      for (const questionIndex of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        const prompt = `What is ${roundIndex} + ${questionIndex}`;
        const answer = `${roundIndex + questionIndex}`;
        const question = await this.questionRepo.create({
          prompt,
          answer,
        });

        await this.questionRepo.save(question);

        const position = await this.positionRepo.create({
          position: questionIndex,
          question,
          round,
        });

        await this.positionRepo.save(position);
      }

      await this.roundRepo.save(round);
    }
  }

  // getHello(): string {
  //   return 'Hello World!';
  // }
}
