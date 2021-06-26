import { Test, TestingModule } from '@nestjs/testing';
import { TriviaResolver } from './trivia.resolver';
import { TriviaService } from './trivia.service';

describe('TriviaResolver', () => {
  let resolver: TriviaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TriviaResolver, TriviaService],
    }).compile();

    resolver = module.get<TriviaResolver>(TriviaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
