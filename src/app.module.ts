import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TriviaModule } from './trivia/trivia.module';
import { RoundModule } from './round/round.module';
import { QuestionModule } from './question/question.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { Trivia } from './trivia/entities/trivia.entity';
import { Round } from './round/entities/round.entity';
import { Question } from './question/entities/question.entity';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Trivia, Round, Question]),
    TriviaModule,
    RoundModule,
    QuestionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
