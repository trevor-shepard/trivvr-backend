import { Test, TestingModule } from '@nestjs/testing';
import { RoundToQuestionService } from './round-to-question.service';

describe('RoundToQuestionService', () => {
  let service: RoundToQuestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoundToQuestionService],
    }).compile();

    service = module.get<RoundToQuestionService>(RoundToQuestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
