import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class AddRoundInput {
  @Field(() => Int, { description: 'add a round to trivia' })
  triviaID: number;
}
