import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRoundInput {
  @Field(() => Int, { description: 'triviaID' })
  triviaID: number;
  @Field(() => Int, { description: 'position' })
  position: number;
}
