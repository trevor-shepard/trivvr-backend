import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Trivia {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
