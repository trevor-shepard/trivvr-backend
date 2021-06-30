import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateTriviaInput } from './dto/create-trivia.input';
import { UpdateTriviaInput } from './dto/update-trivia.input';
import { Trivia } from './entities/trivia.entity';

@Injectable()
export class TriviaService {
  constructor(
    @InjectRepository(Trivia) private triviaRepo: Repository<Trivia>,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  async create(createTriviaInput: CreateTriviaInput) {
    const { name, userID } = createTriviaInput;

    const user = await this.userRepo.findOne(userID);

    if (!user) throw Error('user not found');

    console.log('user', user);

    const trivia = this.triviaRepo.create({
      name,
      game_status: 'incomplete',
    });
    console.log('trivia');

    trivia.admins = [user];

    await this.triviaRepo.save(trivia);

    return trivia;
  }

  async findAllUsersTrivia(userID: number) {
    const user = await this.userRepo
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.trivias', 'trivia')
      .where('user.id = :id', { id: userID })
      .getOne();

    if (!user) throw Error('user not found');

    return user.trivias;
  }

  async findOne(id: number) {
    return await this.triviaRepo.findOne(id, {
      relations: [
        'rounds',
        'rounds.roundToQuestion',
        'rounds.roundToQuestion.question',
      ],
    });
  }

  // update(id: number, updateTriviaInput: UpdateTriviaInput) {
  //   return `This action updates a #${id} trivia`;
  // }
}
