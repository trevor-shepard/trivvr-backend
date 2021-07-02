import { Test, TestingModule } from '@nestjs/testing';
import { QuestionPositionService } from './question-position.service';

describe('QuestionPositionService', () => {
  let service: QuestionPositionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionPositionService],
    }).compile();

    service = module.get<QuestionPositionService>(QuestionPositionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
