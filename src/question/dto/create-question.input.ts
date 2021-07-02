import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateQuestionInput {
  @Field(() => String, { description: 'question' })
  prompt: string;

  @Field(() => String, { description: 'question' })
  answer: string;

  @Field(() => Int, { description: 'id of round question belongs to' })
  roundID: number;

  @Field(() => Int, { description: 'position in the round' })
  position: number;
}
