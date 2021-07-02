import { Module } from '@nestjs/common';
import { TriviaService } from './trivia.service';
import { TriviaResolver } from './trivia.resolver';
import config from 'ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from 'src/question/entities/question.entity';
import { Trivia } from './entities/trivia.entity';
import { QuestionModule } from 'src/question/question.module';
import { Round } from 'src/round/entities/round.entity';
import { RoundModule } from 'src/round/round.module';
import { User } from 'src/user/entities/user.entity';
import { UserModule } from 'src/user/user.module';
import { QuestionPosition } from 'src/questionPosition/entities/question-position.entity';
import { QuestionPositionModule } from 'src/questionPosition/question-position.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Question, Trivia, Round, QuestionPosition, User]),
    QuestionModule,
    TriviaModule,
    RoundModule,
    QuestionPositionModule,
    UserModule,
  ],
  providers: [TriviaResolver, TriviaService],
})
export class TriviaModule {}
