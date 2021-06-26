import { Test, TestingModule } from '@nestjs/testing';
import { RoundResolver } from './round.resolver';
import { RoundService } from './round.service';

describe('RoundResolver', () => {
  let resolver: RoundResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoundResolver, RoundService],
    }).compile();

    resolver = module.get<RoundResolver>(RoundResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
