import { Test, TestingModule } from '@nestjs/testing';
import { QuestionPositionResolver } from './question-position.resolver';
import { QuestionPositionService } from './question-position.service';

describe('QuestionPositionResolver', () => {
  let resolver: QuestionPositionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionPositionResolver, QuestionPositionService],
    }).compile();

    resolver = module.get<QuestionPositionResolver>(QuestionPositionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
