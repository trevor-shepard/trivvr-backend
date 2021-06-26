import { Module } from '@nestjs/common';
import { TriviaService } from './trivia.service';
import { TriviaResolver } from './trivia.resolver';

@Module({
  providers: [TriviaResolver, TriviaService],
})
export class TriviaModule {}
