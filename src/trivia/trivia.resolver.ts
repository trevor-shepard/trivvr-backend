import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TriviaService } from './trivia.service';
import { Trivia } from './entities/trivia.entity';
import { CreateTriviaInput } from './dto/create-trivia.input';
import { UpdateTriviaInput } from './dto/update-trivia.input';

@Resolver(() => Trivia)
export class TriviaResolver {
  constructor(private readonly triviaService: TriviaService) {}

  @Query(() => [Trivia])
  getAllUsersTrivia(@Args('id', { type: () => Int }) id: number) {
    try {
      return this.triviaService.findAllUsersTrivia(id);
    } catch (error) {
      console.log('error', error);
    }
  }

  @Mutation(() => Trivia)
  createTrivia(
    @Args('createTriviaInput') createTriviaInput: CreateTriviaInput,
  ) {
    return this.triviaService.create(createTriviaInput);
  }

  // @Query(() => [Trivia], { name: 'trivia' })
  // findAll() {
  //   return this.triviaService.findAll();
  // }

  // @Query(() => Trivia, { name: 'trivia' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.triviaService.findOne(id);
  // }

  // @Mutation(() => Trivia)
  // updateTrivia(
  //   @Args('updateTriviaInput') updateTriviaInput: UpdateTriviaInput,
  // ) {
  //   return this.triviaService.update(updateTriviaInput.id, updateTriviaInput);
  // }

  // @Mutation(() => Trivia)
  // removeTrivia(@Args('id', { type: () => Int }) id: number) {
  //   return this.triviaService.remove(id);
  // }
}
