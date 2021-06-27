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

  getHello(): string {
    return 'Hello World!';
  }
}
