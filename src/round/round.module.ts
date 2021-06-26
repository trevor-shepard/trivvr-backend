import { Module } from '@nestjs/common';
import { RoundService } from './round.service';
import { RoundResolver } from './round.resolver';

@Module({
  providers: [RoundResolver, RoundService],
})
export class RoundModule {}
