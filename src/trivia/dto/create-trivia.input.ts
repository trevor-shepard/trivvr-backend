import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTriviaInput {
  @Field(() => String, { description: 'name of trivia' })
  name: string;

  @Field(() => Int)
  userID: number;
}
