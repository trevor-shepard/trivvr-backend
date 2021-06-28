import { Test, TestingModule } from '@nestjs/testing';
import { RoundToQuestionResolver } from './round-to-question.resolver';
import { RoundToQuestionService } from './round-to-question.service';

describe('RoundToQuestionResolver', () => {
  let resolver: RoundToQuestionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoundToQuestionResolver, RoundToQuestionService],
    }).compile();

    resolver = module.get<RoundToQuestionResolver>(RoundToQuestionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
