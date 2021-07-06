import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class DeleteQuestionInput {
  @Field(() => Int, { description: 'id of the of the question position' })
  positionID: number;
}
