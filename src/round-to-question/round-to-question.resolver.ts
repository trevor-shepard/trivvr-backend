import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RoundToQuestionService } from './round-to-question.service';
import { RoundToQuestion } from './entities/round-to-question.entity';
import { CreateRoundToQuestionInput } from './dto/create-round-to-question.input';
import { UpdateRoundToQuestionInput } from './dto/update-round-to-question.input';

@Resolver(() => RoundToQuestion)
export class RoundToQuestionResolver {
  constructor(
    private readonly roundToQuestionService: RoundToQuestionService,
  ) {}

  @Mutation(() => RoundToQuestion)
  createRoundToQuestion(
    @Args('createRoundToQuestionInput')
    createRoundToQuestionInput: CreateRoundToQuestionInput,
  ) {
    return this.roundToQuestionService.create(createRoundToQuestionInput);
  }

  @Query(() => [RoundToQuestion], { name: 'roundToQuestion' })
  findAll() {
    return this.roundToQuestionService.findAll();
  }

  @Query(() => RoundToQuestion, { name: 'roundToQuestion' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.roundToQuestionService.findOne(id);
  }

  @Mutation(() => RoundToQuestion)
  updateRoundToQuestion(
    @Args('updateRoundToQuestionInput')
    updateRoundToQuestionInput: UpdateRoundToQuestionInput,
  ) {
    return this.roundToQuestionService.update(
      updateRoundToQuestionInput.id,
      updateRoundToQuestionInput,
    );
  }

  @Mutation(() => RoundToQuestion)
  removeRoundToQuestion(@Args('id', { type: () => Int }) id: number) {
    return this.roundToQuestionService.remove(id);
  }
}
