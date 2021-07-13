import { ObjectType, Field, Int } from '@nestjs/graphql';
import { randomInt } from 'crypto';
import { Round } from 'src/round/entities/round.entity';
import { Team } from 'src/team/entities/team.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Trivia {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  join_code: string;

  @Field(() => Int)
  @Column({ default: 0 })
  current_round: number;

  @Field()
  @Column({ default: 'incomplete' })
  game_status: 'incomplete' | 'ready' | 'started' | 'finished';

  @Field(() => [Round])
  @OneToMany(() => Round, (round) => round.trivia)
  rounds: Round[];

  @Field(() => [User])
  @ManyToMany(() => User, (user) => user.trivias, { eager: true })
  admins: User[];

  @Field(() => [Team])
  @OneToMany(() => Team, (team) => team.trivia, { eager: true })
  teams: Team[];
}
