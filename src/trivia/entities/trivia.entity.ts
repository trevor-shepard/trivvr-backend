import { ObjectType, Field } from '@nestjs/graphql';
import { Round } from 'src/round/entities/round.entity';
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
  game_status: 'incomplete' | 'complete' | 'started' | 'finished';

  @Field(() => [Round])
  @OneToMany(() => Round, (round) => round.trivia)
  rounds: Round[];

  @Field(() => [User])
  @ManyToMany(() => User, (user) => user.trivias, { eager: true })
  admins: User[];
}
