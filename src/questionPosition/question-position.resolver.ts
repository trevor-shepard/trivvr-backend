import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QuestionPositionService } from './question-position.service';
import { QuestionPosition } from './entities/question-position.entity';
import { CreateQuestionPositionInput } from './dto/create-round-to-question.input';
import { UpdateQuestionPositionInput } from './dto/update-round-to-question.input';

@Resolver(() => QuestionPosition)
export class QuestionPositionResolver {
  constructor(private readonly positionService: QuestionPositionService) {}

  @Mutation(() => QuestionPosition)
  createQuestionPosition(
    @Args('createQuestionPositionInput')
    createQuestionPositionInput: CreateQuestionPositionInput,
  ) {
    return this.positionService.create(createQuestionPositionInput);
  }

  @Query(() => [QuestionPosition], { name: 'position' })
  findAll() {
    return this.positionService.findAll();
  }

  @Query(() => QuestionPosition, { name: 'position' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.positionService.findOne(id);
  }

  @Mutation(() => QuestionPosition)
  updateQuestionPosition(
    @Args('updateQuestionPositionInput')
    updateQuestionPositionInput: UpdateQuestionPositionInput,
  ) {
    return this.positionService.update(
      updateQuestionPositionInput.id,
      updateQuestionPositionInput,
    );
  }

  @Mutation(() => QuestionPosition)
  removeQuestionPosition(@Args('id', { type: () => Int }) id: number) {
    return this.positionService.remove(id);
  }
}
