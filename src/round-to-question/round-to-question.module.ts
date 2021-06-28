import { Module } from '@nestjs/common';
import { RoundToQuestionService } from './round-to-question.service';
import { RoundToQuestionResolver } from './round-to-question.resolver';

@Module({
  providers: [RoundToQuestionResolver, RoundToQuestionService],
})
export class RoundToQuestionModule {}
