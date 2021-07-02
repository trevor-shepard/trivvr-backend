import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionResolver } from './question.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Round } from 'src/round/entities/round.entity';
import { RoundModule } from 'src/round/round.module';
import config from 'ormconfig';
import { Question } from './entities/question.entity';
import { QuestionPosition } from 'src/questionPosition/entities/question-position.entity';
import { QuestionPositionModule } from 'src/questionPosition/question-position.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Question, Round, QuestionPosition]),
    QuestionModule,
    RoundModule,
    QuestionPositionModule,
  ],
  providers: [QuestionResolver, QuestionService],
})
export class QuestionModule {}
