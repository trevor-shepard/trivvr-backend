import { CreateQuestionPositionInput } from './create-round-to-question.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateQuestionPositionInput extends PartialType(
  CreateQuestionPositionInput,
) {
  @Field(() => Int)
  id: number;
}
