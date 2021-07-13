import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class JoinTeamInput {
  @Field(() => Int, { description: 'add a round to trivia' })
  triviaID: number;

  @Field({ description: 'team name' })
  team_name: string;

  @Field({ description: 'user that is joining the team' })
  username: string;
}
