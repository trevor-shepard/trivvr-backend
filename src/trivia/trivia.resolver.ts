import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TriviaService } from './trivia.service';
import { Trivia } from './entities/trivia.entity';
import { CreateTriviaInput } from './dto/create-trivia.input';
import { AddRoundInput } from './dto/add-round.input';
import { StartTriviaInput } from './dto/start-trivia.input';
import { JoinTeamInput } from './dto/join-team.input';

@Resolver(() => Trivia)
export class TriviaResolver {
  constructor(private readonly triviaService: TriviaService) {}

  @Query(() => [Trivia])
  getAllUsersTrivia(@Args('id', { type: () => Int }) id: number) {
    try {
      return this.triviaService.findTriviasByUser(id);
    } catch (error) {
      console.log('error', error);
    }
  }

  @Query(() => Trivia, { name: 'trivia' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.triviaService.findOne(id);
  }

  @Mutation(() => Trivia)
  createTrivia(
    @Args('createTriviaInput') createTriviaInput: CreateTriviaInput,
  ) {
    return this.triviaService.create(createTriviaInput);
  }
  @Mutation(() => Trivia)
  addRound(@Args('addRoundInput') addRoundInput: AddRoundInput) {
    return this.triviaService.addRound(addRoundInput);
  }

  @Mutation(() => Trivia)
  startTrivia(@Args('startTriviaInput') startTriviaInput: StartTriviaInput) {
    return this.triviaService.startTrivia(startTriviaInput);
  }

  @Mutation(() => Trivia)
  joinTeam(@Args('joinTeamInput') joinTeamInput: JoinTeamInput) {
    return this.triviaService.joinTeam(joinTeamInput);
  }
}
