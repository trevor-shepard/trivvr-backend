import { Module } from '@nestjs/common';
import { TriviaService } from './trivia.service';
import { TriviaResolver } from './trivia.resolver';
import config from 'ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from 'src/question/entities/question.entity';
import { Trivia } from './entities/trivia.entity';
import { QuestionModule } from 'src/question/question.module';
import { RoundToQuestion } from 'src/round-to-question/entities/round-to-question.entity';
import { RoundToQuestionModule } from 'src/round-to-question/round-to-question.module';
import { Round } from 'src/round/entities/round.entity';
import { RoundModule } from 'src/round/round.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Question, Trivia, Round, RoundToQuestion]),
    QuestionModule,
    TriviaModule,
    RoundModule,
    RoundToQuestionModule,
  ],
  providers: [TriviaResolver, TriviaService],
})
export class TriviaModule {}
