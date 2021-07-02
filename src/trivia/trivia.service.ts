import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Round } from 'src/round/entities/round.entity';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { AddRoundInput } from './dto/add-round.input';
import { CreateTriviaInput } from './dto/create-trivia.input';
import { Trivia } from './entities/trivia.entity';

@Injectable()
export class TriviaService {
  constructor(
    @InjectRepository(Trivia) private triviaRepo: Repository<Trivia>,
    @InjectRepository(Round) private roundRepo: Repository<Round>,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  async create(createTriviaInput: CreateTriviaInput) {
    const { name, userID } = createTriviaInput;

    const user = await this.userRepo.findOne(userID);

    if (!user) throw Error('user not found');

    const trivia = this.triviaRepo.create({
      name,
      game_status: 'incomplete',
    });

    trivia.admins = [user];

    await this.triviaRepo.save(trivia);

    return trivia;
  }

  async findTriviasByUser(userID: number) {
    const user = await this.userRepo.findOneOrFail(userID, {
      relations: ['trivias'],
    });

    return user.trivias;
  }

  async findOne(id: number) {
    const trivia = await this.triviaRepo.findOne(id, {
      relations: ['rounds', 'rounds.questions'],
    });

    return trivia;
  }

  async addRound({ triviaID }: AddRoundInput) {
    const trivia = await this.triviaRepo.findOneOrFail(triviaID, {
      relations: ['rounds'],
    });

    const round = this.roundRepo.create({
      trivia,
      position: trivia.rounds.length,
    });

    await this.roundRepo.save(round);

    return await this.triviaRepo.findOne(triviaID, {
      relations: ['rounds', 'rounds.questions'],
    });
  }
}
