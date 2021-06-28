import { CreateRoundToQuestionInput } from './create-round-to-question.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRoundToQuestionInput extends PartialType(
  CreateRoundToQuestionInput,
) {
  @Field(() => Int)
  id: number;
}
