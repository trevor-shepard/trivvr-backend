import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { Question } from 'src/question/entities/question.entity';
import { QuestionModule } from 'src/question/question.module';
import { RoundToQuestion } from 'src/round-to-question/entities/round-to-question.entity';
import { RoundToQuestionModule } from 'src/round-to-question/round-to-question.module';
import { Round } from 'src/round/entities/round.entity';
import { RoundModule } from 'src/round/round.module';
import { Trivia } from 'src/trivia/entities/trivia.entity';
import { TriviaModule } from 'src/trivia/trivia.module';
import config from 'ormconfig';
import { User } from './entities/user.entity';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Question, Trivia, Round, RoundToQuestion, User]),
    QuestionModule,
    TriviaModule,
    RoundModule,
    RoundToQuestionModule,
    UserModule,
  ],
  providers: [UserResolver, UserService],
})
export class UserModule {}
