import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateQuestionPositionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
