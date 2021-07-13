import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class StartTriviaInput {
  @Field(() => Int, { description: 'trivia id' })
  triviaID: number;
}
