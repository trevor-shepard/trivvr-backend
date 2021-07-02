import { Module } from '@nestjs/common';
import { QuestionPositionService } from './question-position.service';
import { QuestionPositionResolver } from './question-position.resolver';

@Module({
  providers: [QuestionPositionResolver, QuestionPositionService],
})
export class QuestionPositionModule {}
